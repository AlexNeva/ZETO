export default function initAccordions() {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(accordion => {
    const accordionItems = accordion.querySelectorAll('.accordion__item');

    accordionItems.forEach(item => {

      const control = item.querySelector('.accordion__control');
      const content = item.querySelector('.accordion__content');

      if (item.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        // content.style.maxHeight = content.scrollHeight + 'px';
        content.style.maxHeight = 320 + 'px';

      }


      item.addEventListener('click', (e) => {
        if (e.target.closest('.accordion__control')) {
          const self = e.currentTarget;
          accordion.style.height = 'auto';
          accordion.style.overflow = 'auto';
          self.classList.toggle('open');

          if (self.classList.contains('open')) {
            control.setAttribute('aria-expanded', true);
            content.setAttribute('aria-hidden', false);
            // content.style.maxHeight = content.scrollHeight + 'px';
            content.style.maxHeight = 320 + 'px';

          } else {
            control.setAttribute('aria-expanded', false);
            content.setAttribute('aria-hidden', true);
            content.style.maxHeight = null;
          }
        }

      })
    })
  })
}