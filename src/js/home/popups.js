
export default function openPopup(popupSelector, triggerSelector, closeBtnSelector) {
  const popup = document.querySelector(popupSelector),
    trigger = document.querySelector(triggerSelector),
    closeBtn = document.querySelector(closeBtnSelector),
    body = document.querySelector('body')

  trigger.onclick = () => {
    popup.classList.add('show');
    body.classList.add('lock');
  }
  closeBtn.onclick = () => {
    popup.classList.remove('show');
    body.classList.remove('lock');
  }
}