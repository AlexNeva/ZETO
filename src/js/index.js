import '../scss/home.scss';

import header from './home/header.js'
import initSearchPartsSelects from './home/search-parts.js'
import initSwipers from './home/swiper-cards.js'
import initCustomScrollbar from './home/custom-scroll.js'
import catalog from './home/catalog.js'
import popup from './home/popups.js'


initSearchPartsSelects();
// initCustomScrollbar();
initSwipers();
header.actionCart('open');
header.openSearch();
catalog.hoveredItems();
catalog.toClickCards();
popup.openPopup();
popup.closePopup();



console.log('Works!');

// закрытие всех окон при клике вне

window.onclick = (e) => {


  if (!e.target.closest('.cart')) {
    header.actionCart('close');
  }
  if (!e.target.closest('.header__search')) {
    document.querySelector('.search-goods').classList.remove('open')
  }
  if (!e.target.closest('.catalog-parts__card')) {
    document.querySelectorAll('.catalog-parts__card').forEach(el => {
      el.classList.remove('open')
    })
  }


}




