import Choices from "choices.js";
import SimpleBar from 'simplebar';


export default function initSearchPartsSelects() {
  const selects = document.querySelectorAll('.search-parts__select');

  selects.forEach(select => {
    const choices = new Choices(select, {
      itemSelectText: '',
      shouldSort: false,

    });

    const choicesHtml = select.closest('.choices');
    const list = choicesHtml.querySelector('.choices__list--dropdown .choices__list');

    let simplebar;



    select.addEventListener('showDropdown', () => {

      simplebar = new SimpleBar(list);

    })
    select.addEventListener('hideDropdown', () => {

      simplebar.unMount()

    })

  })
  // const element = document.querySelector('#category');
  // const choices = new Choices(element);
}

