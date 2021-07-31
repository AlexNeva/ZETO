import '../scss/home.scss';

import header from './home/header.js'
import initSearchPartsSelects from './home/search-parts.js'
import headerSelect from './home/header-select'
import initSwipers from './home/swiper-cards.js'
import megamenu from './home/megamenu.js'
import popup from './home/popups.js'
import dataDa from './home/dynamicAdapt.js'
import initAccordions from './home/accordion.js'


initSearchPartsSelects();
initSwipers();
header.actionCart('open');
header.openSearch();
megamenu.hoveredItems();
popup.openPopup();
popup.closePopup();
dataDa();
initAccordions();
headerSelect();



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




