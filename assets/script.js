const nav = document.getElementById("nav");
window.onscroll = function () {
  if (document.body.scrollTop >= 1440 || document.documentElement.scrollTop >= 1440 ) {
    nav.classList.remove('color');
  } else {
    nav.classList.add('color');
  }
};
