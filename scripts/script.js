const toggle = document.querySelector('#menu-ikon');
const nav = document.querySelector('nav');

//po kliknięciu na element #menu-ikon zmień element nav na klasę vertical-nav i przelączaj się między nimi
toggle.addEventListener('click', () => {
  nav.classList.toggle ('vertical-nav');
});