const toggle = document.querySelector('#menu-ikon');
const nav = document.querySelector('nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle ('vertical-nav');
});