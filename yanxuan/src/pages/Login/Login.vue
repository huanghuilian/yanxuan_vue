<template>
  <div>
    <ShiwuTop/>
    <div class="loginContainer">
      <div class="loginInner">
        <div class="login_header">
          <h2 class="login_logo">登录注册</h2>
          <div class="login_header_title">
            <a href="javascript:;" @click="setLoginWay(true)" :class="{on: loginWay}">短信登录</a>
            <a href="javascript:;" @click="setLoginWay(false)" :class="{on: !loginWay}">密码登录</a>
          </div>
        </div>
        <div class="login_content">
          <form @submit.prevent="login">
            <div :class="{on: loginWay}">
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
                <button class="get_verification"
                        v-if="!computedTime"
                        :class="{right_phone_number:rightPhoneNumber}"
                        @click.prevent="getVerifyCode">获取验证码
                </button>
                <button disabled="disabled" class="get_verification" v-else>已发送({{computedTime}}s)</button>
              </section>
              <section class="login_verification">
                <input type="text" maxlength="8" placeholder="验证码" v-model="code">
              </section>
              <section class="login_hint">
                温馨提示：未注册严选帐号的手机号，登录时将自动注册，且代表已同意
                <a href="javascript:;">《用户服务协议》</a>
              </section>
            </div>
            <div :class="{on: !loginWay}">
              <section>
                <section class="login_message">
                  <input type="text" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
                </section>
                <section class="login_verification">
                  <input type="password" placeholder="密码" v-model="pwd" v-if="!showPassword">
                  <input type="text" placeholder="密码" v-model="pwd" v-else>

                  <div class="switch_button" :class="showPassword ? 'on' : 'off'"
                       @click="changePassWordType">
                    <div class="switch_circle" :class="{right: showPassword}"></div>
                    <span class="switch_text">{{showPassword?'abc':''}}</span>
                  </div>

                </section>
                <section class="login_message">
                  <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                  <img ref="captcha" class="get_verification"
                       src="./capture/6EF8.png" alt="captcha" @click="getCaptchaCode">
                </section>
              </section>
            </div>
            <input type="submit" value="登录" class="login_submit"></input>
          </form>
          <a href="javascript:;" class="about_us">关于我们</a>
        </div>
        <span href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </span>
      </div>
      <alert-tip v-if="showAlert"
                 @closeTip="closeTip"
                 :alertText="alertText"/>
    </div>
  </div>
</template>

<script>
  import ShiwuTop from '../../components/ShiwuTop/ShiwuTop'
  import AlertTip from '../../components/AlertTip/AlertTip.vue'
  import {reqCaptchas, sendCode, smsLogin, pwdLogin} from '../../api'
  import {mapActions} from 'vuex'
  const baseUrl = './capture/'
  export default {
    data() {
      return {
        loginWay: false, //登录方式，false代表密码登录, true代表短信登陆
        showPassword: false, // 是否显示密码
        computedTime: 0, //倒数记时
        phone: '', //电话号码
        code: '', //短信验证码
        name: '', //用户名
        pwd: '', //密码
        captcha: '', // 验证码
        captchaImg: null, //验证码图片
        showAlert: false, //显示提示组件
        alertText: null, //提示的内容
      }
    },

    computed: {
      //判断手机号码
      rightPhoneNumber: function () {
        return /^1\d{10}$/.test(this.phone)
      }
    },

    methods: {
      ...mapActions([
        'recordUserInfo',
      ]),

      // 设置登录方式
      setLoginWay(loginWay) {
        this.loginWay = loginWay
      },
      //是否显示密码
      changePassWordType() {
        this.showPassword = !this.showPassword
      },
      // 获取图形验证码
      async getCaptchaCode() {

      },

      // 获取短信验证码
      async getVerifyCode() {
        if (this.rightPhoneNumber) {
          this.computedTime = 30
          this.intervalId = setInterval(() => {
            this.computedTime--
            if (this.computedTime == 0) {
              clearInterval(this.intervalId)
            }
          }, 1000)
          //发送短信验证码
         /* let result = await sendCode(this.phone)
          if (result.code===1) {
            this.showAlert = true
            this.alertText = result.msg
          }*/
        }
      },

      // 发送登录信息
      async login() {
        // debugger
        if (this.loginWay) {
          if (!this.phone) {
            this.showAlert = true;
            this.alertText = '手机号码不正确'
            return
          } else if (!(/^\d{6}$/gi.test(this.code))) {
            this.showAlert = true;
            this.alertText = '短信验证码不正确'
            return
          }

          //手机号短信登录
          const result = await smsLogin(this.phone, this.code);
          if(result.code===0) {
            const {phone,code} = this
            result.data.forEach((user)=>{
              const {phone,code} = user
              if (phone==this.phone&&code==this.code){
                this.userInfo = user
                this.$router.replace('/home')
              }
            })
          } else {
            this.userInfo = {
              msg: '登陆失败, 手机号或验证不正确'
            }
          }
        } else {
          if (!this.name) {
            this.showAlert = true
            this.alertText = '请输入手机号/邮箱/用户名'
            return
          } else if (!this.pwd||!(/^\d{3}$/g.test(this.pwd))) {
            this.showAlert = true;
            this.alertText = '密码格式不对'
            return
          } else if (!this.captcha) {
            this.showAlert = true
            this.alertText = '请输入验证码'
            return
          }else{
            if (!(/^[a-zA-Z0-9]{4}$/g.test(this.captcha))){
              this.showAlert = true
              this.alertText = '验证码格式有误'
            }
          }
          //用户名登录
          const result = await pwdLogin()
          console.log(result)
          if(result.code===0) {
            const {name,pwd,captcha} = this
            result.data.find((user)=>{//遍历模拟数据中的users
              const {userName,pwd} = user //取出遍历项中的数据
              if (this.name==userName&&this.pwd==pwd&&this.captcha=="6EF8"){ //表示用户输入的用户名和密码与模拟的数据相等
                this.userInfo = user //将用户信息存到userInfo中
                this.$router.replace('/home')
              }
            })
          } else {
            this.userInfo = {
              msg: "登录失败"
            }
          }
        }
        //如果返回的值不正确，则弹出提示框，返回的值正确则返回上一页
        if (this.userInfo&&!this.userInfo.userId) {
          this.showAlert = true
          this.alertText = this.userInfo.msg
        } else {
          const userInfo = this.userInfo
          this.$store.dispatch('recordUserInfo',userInfo)
          this.$router.replace('/home')
        }
      },
      // 关系提示框
      closeTip() {
        this.showAlert = false
      }
    },
    components:{
      ShiwuTop,
      AlertTip
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .loginContainer
    width 100%
    height (667/$unit)
    background #fff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 20px
          font-weight bold
          color #B4282D
          text-align center
        .login_header_title
          padding-top 40px
          text-align center #B4282D
          > a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color #B4282D
              font-weight 700
              border-bottom 2px solid #B4282D
      .login_content
        > form
          > div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #B4282D
            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
                &.right_phone_number
                  color #000
            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s, border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #B4282D
                > .switch_circle
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0, 0, 0, .1)
                  transition transform .3s
                  &.right
                    transform translateX(27px)

            .login_hint
              margin-top 12px
              color #999
              font-size 14px
              line-height 20px
              > a
                color #B4282D
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #B4282D
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .about_us
          display block
          font-size 12px
          margin-top 20px
          text-align center
          color #999
      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        > .iconfont
          font-size 20px
          color #999
</style>
