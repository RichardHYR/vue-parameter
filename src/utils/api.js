import qs from 'qs'
import axios from 'axios'
// axios.defaults.headers.post["Conten-type"] = "application/json"
axios.defaults.headers.post["Conten-type"] = "multipart/form-data"

export default {
  install(Vue, options) {
    // 页码
    Vue.prototype.$pageSize = 15
    //请求地址
    Vue.prototype.$PostUrl = require('./../urls/url')
    // 获取数据API
    // this.$PostAPI(this.$PostUrl.xxxUrl,params).then(res => {
    // });
    Vue.prototype.$PostAPI = (url, params) => {
      //如果没有请求参数,创建空参
      if (!params) {
        params = {}
      }
      if (params instanceof Object && !Array.isArray(params)) {
        if (!params.hasOwnProperty('code')) {
          let authData = loadLoginAuth();
          //全局拼接的参数
          var globalParam = {}
          params = Object.assign(params, globalParam)
        }
      }
      return axios.post(url, qs.stringify(params))
        .then(Res => Res.data)
    }
    //上传图片API
    // let formData = new FormData();
    // formData.append("img", file.file);
    // this.$upImg(this.$PostUrl.xxxUrl, formData).then(res => {
    // });
    Vue.prototype.$upImg = (url, params) => {
      // let authData = loadLoginAuth();
      // params.append("uid", authData.id);
      // params.append("session", authData.u_session);
      return axios.post(url, params, {
          headers: {
            'Content-Type': "multipart/form-data"
          }
      }).then(Res => Res.data)
    }

  }
}
