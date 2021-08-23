const menuBtn = document.querySelector('.menu-btn');
const navs = document.querySelectorAll('.nav-item');
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.initial')
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    navs.forEach(nav => nav.classList.toggle('nav-open'));
    navbar.classList.toggle('mobilize');
    logo.classList.toggle('show');
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    navs.forEach(nav => nav.classList.toggle('nav-open'));
    navbar.classList.toggle('mobilize');
    logo.classList.toggle('show');
  }
});

