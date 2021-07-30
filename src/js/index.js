import '../scss/home.scss';

import header from './home/header.js'
import initSearchPartsSelects from './home/search-parts.js'
import initSwipers from './home/swiper-cards.js'
import initCustomScrollbar from './home/custom-scroll.js'
import catalog from './home/catalog.js'
import openPopup from './home/popups.js'


initSearchPartsSelects();
initSwipers();
header.actionCart('open');
header.openSearch();
header.openSubMenu();
initCustomScrollbar();
catalog.hoveredItems();
catalog.toClickCards();
openPopup('.catalog', '.header__catalog', '.catalog__close');



console.log('Works!');

// закрытие всех окон при клиаке вне

window.onclick = (e) => {
  if (!e.target.closest('.cart')) {
    header.actionCart('close');
  }
}




