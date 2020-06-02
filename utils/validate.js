exports.validUrl = url => {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return reg.test(url);
};

exports.validLowerCase = str => {
  const reg = /^[a-z]+$/;
  return reg.test(str);
};

exports.validUpperCase = str => {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
};

exports.validAlphabets = str => {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
};

exports.validEmail = email => {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
};

exports.isString = str => {
  if (typeof str === 'string' || str instanceof String) {
    return true;
  }
  return false;
};

exports.isArray = args => {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(args) === '[Object Array]';
  }
  return Array.isArray(args);
};
