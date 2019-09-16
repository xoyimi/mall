import axios from 'axios'

export function request(config) {
  //1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/v1',
    timeout: 5000,
  })

  //2.axios的拦截器
  // instance.interceptors.request.use(config => {
    // console.log("这里成功拦截了请求信息");
    //1.比如config中的一些信息不符合服务器要求
    //2.比如每次发送网络请求时,都希望在界面中显示一个请求的图标
    //3.某些网络请求(比如登录(token)),必须携带一些特殊的信息

    // 必须返回 
    // return config
  // }, err => {
    // console.log(err);
  // })
  instance.interceptors.response.use(res => {
    // console.log(res)
    //这里也要返回
    return res.data
  // }
  // err => {
    // console.log(err);
  })

  //3.发送真正的网络请求
  //axios实例 本来就是个 返回promise
  return instance(config)
}
