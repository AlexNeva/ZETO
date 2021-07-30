function toClickCards() {
  const cards = document.querySelectorAll('.catalog-parts__card');
  cards.forEach(card => {
    card.onclick = (e) => {
      if (e.target.closest('.catalog-parts__card > button')) {
        cards.forEach(card => {
          card.classList.remove('open')
        })
        card.classList.add('open');
      }
    }
  })

}
function hoveredItems() {

  const megaM = document.querySelectorAll('.mega-m');


  megaM.forEach(mega => {
    const cardsCatalogMenuList = mega.querySelector('.mega-m__menu'),
      megaItems = mega.querySelectorAll('.mega-m__menu > li'),
      megaSubmenus = mega.querySelectorAll('.mega-m__submenu');

    megaItems.forEach((item, index) => {

      item.onmouseenter = () => {

        megaItems.forEach(item => {
          item.classList.remove('active')
        })

        item.classList.add('active')
        megaSubmenus.forEach(item => {
          item.classList.remove('show')
        })



        megaSubmenus[index].classList.add('show')





      }

    })

    megaM.onmouseleave = () => {
      megaItems.forEach(item => {
        item.classList.remove('active')
      })
      megaSubmenus.forEach(item => {
        item.classList.remove('show')
      })
    }
  })


}

export default {
  hoveredItems,
  toClickCards,
}