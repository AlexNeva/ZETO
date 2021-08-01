import SimpleBar from 'simplebar';

export default function initCustomScrollbar() {
  // const scrollbars = document.querySelectorAll('[data-simplebar]');

  const choicesLists = document.querySelectorAll('.choices__list--dropdown .choices__list');

  choicesLists.forEach(list => {
    list.setAttribute('data-simplebar', '')
  })
}