//该模块向外暴露了ajax请求的函数  返回值：promise对象 得到的数据是response.data
import axios from 'axios'
export default function ajax(url='',data={},type='GET') {
  return new Promise(function (resolve, reject) {
    let promise
    //根据不同的请求方式发送与其对应的请求
    if (type==='GET'){ // 发送get请求  url /xxx?q=ss&w=ddd&
      //1.拼接路径
      let urlStr = ''
      Object.keys(data).forEach(param => {
        urlStr += param+'='+data[param]+'&'
      })
      if (urlStr){
        url = url+'?'+ urlStr.substr(0,urlStr.lastIndexOf('&'))
      }
      promise =  axios.get(url)
    } else{ // 发送post请求
      promise =  axios.post(url,data)
    }
    promise.then(response=>{
      resolve(response.data)
    })
      .catch(error=>{
        reject(error)
      })
  })

}
