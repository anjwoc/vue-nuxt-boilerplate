const axios = require('axios');
const store = require('~/store');

// import { getToken } from '@/utils/auth' //

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // frontend 와 backend를 서버를 분리 시켜뒀을 때 주는 옵션
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 500,
});

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (store.getters.token) {
      // token 방식의 경우 이런식으로 가능
      // config.headers['X-Token'] = getToken();
    }
    return config;
  },
  error => {
    // do something with request error
    console.error(error); // for debug
    return Promise.reject(error);
  },
);

service.interceptors.response.use(
  response => {
    const res = response.data;
    // 아래는 샘플 코드 서비스에 따라 구현하기 나름

    // // if the custom code is not 20000, it is judged as an error.
    // if (res.code !== 20000) {
    //   Message({
    //     message: res.message || 'Error',
    //     type: 'error',
    //     duration: 5 * 1000
    //   })

    //   // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //     // to re-login
    //     MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
    //       confirmButtonText: 'Re-Login',
    //       cancelButtonText: 'Cancel',
    //       type: 'warning'
    //     }).then(() => {
    //       store.dispatch('user/resetToken').then(() => {
    //         location.reload()
    //       })
    //     })
    //   }
    //   return Promise.reject(new Error(res.message || 'Error'))
    // } else {
    //   return res
    // }
  },
  error => {
    console.error(error);
    // 아래 부분에 뷰티파이에서 제공하는 메세지 박스로 넘기면 된다.
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    // return Promise.reject(error)
  },
);

module.exports = {service};
