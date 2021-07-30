
function actionCart(action) {
  const cart = document.querySelector('.cart'),
    cartTrigger = cart.querySelector('.cart__btn');

  if (action === 'open') {
    cartTrigger.onclick = () => {
      cart.classList.toggle('open')
    }
  }
  if (action === 'close') {
    cart.classList.remove('open')
  }
}
function openSearch() {
  const headerSearch = document.querySelector('.search-goods'),
    searchTriggerOpen = headerSearch.querySelector('.search-goods__label'),
    searchTriggerClose = headerSearch.querySelector('.search-goods__btn'),
    submenu = headerSearch.querySelector('.submenu-search');


  searchTriggerOpen.onclick = () => {
    headerSearch.classList.add('open');
    searchTriggerClose.classList.add('close');
  }

  searchTriggerClose.onclick = () => {
    if (searchTriggerClose.classList.contains('close')) {
      headerSearch.classList.remove('open');
      submenu.classList.remove('open');
    }
  }


}

function openSubMenu() {
  const headerSearch = document.querySelector('.search-goods'),
    searchSubMenuTriggers = headerSearch.querySelectorAll('.search-goods__category'),
    submenu = headerSearch.querySelector('.submenu-search');


  searchSubMenuTriggers.forEach(el => {
    el.onclick = () => {
      submenu.classList.remove('open')

      setTimeout(function () {
        submenu.classList.add('open')

      }, 300)
    }

  });

}


export default {
  actionCart,
  openSearch,
  openSubMenu,
}
