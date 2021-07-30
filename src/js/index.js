import '../scss/home.scss';

import header from './home/header.js'
import initSearchPartsSelects from './home/search-parts.js'
import initSwipers from './home/swiper-cards.js'


initSearchPartsSelects();
initSwipers();
header.actionCart('open');
header.openSearch();
header.openSubMenu();



console.log('Works!');

// закрытие всех окон при клиаке вне

window.onclick = (e) => {
  if (!e.target.closest('.cart')) {
    header.actionCart('close');
  }
}




