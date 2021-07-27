// import Swiper from 'swiper';
import Swiper, { Navigation, Pagination } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);
// import Swiper styles

export default function initSwipers() {
  const swipers = document.querySelectorAll('.cards-swiper');

  swipers.forEach(swiper => {
    const swiperCards = new Swiper(swiper, {
      // Optional parameters
      // loop: true,
      // slidesPerView: 5,
      width: 261,
      // spaceBetween: 25,

      // Navigation arrows
      navigation: {
        nextEl: '.cards-swiper-next',
        prevEl: '.cards-swiper-prev',
      },

    });
  })
}
