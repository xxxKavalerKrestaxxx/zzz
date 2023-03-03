import Swiper, { Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination])

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  slidesPerView: 'auto',
  spaceBetween: 16,
  breakpoints: {
    768: {
      enabled: false
    }
  }
})
