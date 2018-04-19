import $ from 'jquery';

const checkLogin = () => {
  let userInfo = JSON.parse(
    $.ajax({
      url: '/api/getUserInfo',
      method: 'GET',
      async: false,
      dataType: 'json'
    }).responseText
  );
  console.log(userInfo);
  return userInfo;
};

const pageIs = (path) => {
  return window.location.pathname == path;
};


export {checkLogin, pageIs};
