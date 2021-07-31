import Choices from "choices.js";
import SimpleBar from 'simplebar'; 'simplebar';


export default function initSearchPartsSelects() {
  const selects = document.querySelectorAll('select');

  selects.forEach(select => {
    const choices = new Choices(select, {
      itemSelectText: '',
      shouldSort: false,

    });

    const choicesHtml = select.closest('.choices');
    const list = choicesHtml.querySelector('.choices__list--dropdown .choices__list');

    let simplebar;



    select.addEventListener('showDropdown', () => {
      console.log('dfdf');
      simplebar = new SimpleBar(list);

    })
    select.addEventListener('hideDropdown', () => {
      console.log('dfdf');
      simplebar.unMount()

    })

  })
  // const element = document.querySelector('#category');
  // const choices = new Choices(element);
}

