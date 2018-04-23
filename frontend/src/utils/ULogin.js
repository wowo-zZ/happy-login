import $ from 'jquery';

const checkLogin = () => {
  let userInfo = $.ajax({
    url: '/api/getUserInfo',
    method: 'GET',
    async: false,
    dataType: 'json'
  }).responseText;
  if (isJson(userInfo) && JSON.parse(userInfo).length > 0) {
    return JSON.parse(userInfo);
  }
  return false;
};

const pageIs = (path) => {
  return window.location.pathname === path;
};

// 后期搞个package放进去
const isJson = (str) => {
  if (typeof str === 'string' && str.length > 0) {
    let parsedObj = JSON.parse(str);
    if (typeof parsedObj === 'object' && parsedObj) {
      return true;
    }
  }
  return false;
};

export {checkLogin, pageIs, isJson};
