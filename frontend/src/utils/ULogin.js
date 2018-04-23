import $ from 'jquery';

const checkLogin = () => {
  let data = $.ajax({
    url: '/api/getUserInfo',
    method: 'GET',
    async: false,
    dataType: 'json'
  }).responseText;
  if (isJson(data)) {
    console.log(JSON.parse(data));
    let userInfo = JSON.parse(data);
    if (userInfo.username) {
      return userInfo;
    }
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
