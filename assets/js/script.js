window.onscroll = function () {
  const navbar = document.querySelector('.navbar');
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1 ) {
    navbar.classList.add('show');
  } else {
    navbar.classList.remove('show');
  }
}

const navToggle = document.querySelector('.navbar-toggler');
const navToggleIcon = document.querySelector('i.bi');

navToggle.addEventListener('click', function() {
  navToggleIcon.classList.toggle('bi-x')
});