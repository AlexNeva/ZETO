function closePopup() {
  const popups = document.querySelectorAll('.popup'),
    body = document.querySelector('body');

  popups.forEach(popup => {

    popup.onclick = (e) => {
      if (!e.target.closest('.popup__body') || e.target.closest('.popup__close')) {
        popup.classList.remove('show');
        body.classList.remove('lock');
      }
    }
  })

}

function openPopup() {
  const popups = document.querySelectorAll('.popup'),
    body = document.querySelector('body');

  popups.forEach(popup => {
    const openTrigger = document.querySelectorAll(`[data-target=${popup.id}]`)

    openTrigger.forEach(trigger => {
      trigger.onclick = () => {
        popup.classList.add('show');
        body.classList.add('lock');
      }
    })


  })
}

export default {
  closePopup,
  openPopup,
}