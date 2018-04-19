import $ from 'jquery';

const checkLogin = () => {
  return false;
};

const pageIs = (path) => {
  return window.location.pathname == path;
};


export { checkLogin, pageIs };
