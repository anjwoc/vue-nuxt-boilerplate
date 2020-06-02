// sample code
const request = require('~/utils/request');

exports.login = data => {
  return request({
    url: '/user/login',
    mehtod: 'post',
    data,
  });
};

exports.getUserInfo = token => {
  return request({
    url: '/user/info',
    mehtod: 'get',
    params: {token},
  });
};

exports.logout = () => {
  return request({
    url: '/user/logout',
    mehtod: 'post',
  });
};
