import App from './app.js';

window.onload = function () {
  const $root = document.querySelector('#root');
  $root.innerHTML = App();
};
