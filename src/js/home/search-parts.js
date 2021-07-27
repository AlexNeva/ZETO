import Choices from "choices.js";

export default function initSearchPartsSelects() {
  const selects = document.querySelectorAll('.search-parts__form select');

  selects.forEach(select => {
    const choices = new Choices(select);
  })
  // const element = document.querySelector('#category');
  // const choices = new Choices(element);
}

