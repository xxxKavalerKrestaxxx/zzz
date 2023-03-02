import '../scss/style.scss'

const container = document.querySelector('.brands__swiper')
const brandsButton = document.querySelector('.brands__button-open')
brandsButton.addEventListener('click', () => {
  container.classList.toggle('stretched')
  brandsButton.classList.toggle('collapse')
  if (brandsButton.classList.contains('collapse')) {
    brandsButton.textContent = 'Скрыть'
    brandsButton.classList.remove('brands__button-open')
  } else {
    brandsButton.textContent = 'Показать все'
    brandsButton.classList.remove('collapse')
    brandsButton.classList.add('brands__button-open')
  }
})

const containerServices = document.querySelector('.services__swiper-container')
const servicesButton = document.querySelector('.services-swiper__button-open')
servicesButton.addEventListener('click', () => {
  containerServices.classList.toggle('stretched')
  servicesButton.classList.toggle('collapse')
  if (servicesButton.classList.contains('collapse')) {
    servicesButton.textContent = 'Скрыть'
    servicesButton.classList.remove('brands__button-open')
  } else {
    servicesButton.textContent = 'Показать все'
    servicesButton.classList.remove('collapse')
    servicesButton.classList.add('brands__button-open')
  }
})

const buttonBurger = document.getElementById('button-burger')
const buttonCloseBurger = document.getElementById('button-close-burger')
const closeOpacity = document.getElementById('opacity-close')
const burgerMenu = document.querySelector('.categories-menu')
const bossCont = document.querySelector('.mini-boss-container')

buttonBurger.addEventListener('click', () => {
  burgerMenu.classList.add('burger-flex')
  bossCont.classList.add('posFixed')
})

buttonCloseBurger.addEventListener('click', () => {
  burgerMenu.classList.remove('burger-flex')
  bossCont.classList.remove('posFixed')
  window.scrollTo({ top: 0 })
})
closeOpacity.addEventListener('click', () => {
  burgerMenu.classList.remove('burger-flex')
  bossCont.classList.remove('posFixed')
  window.scrollTo({ top: 0 })
})

const buttonMessage = document.querySelector('.button-message-need')
const buttonCloseMessage = document.querySelector(
  '.feedback-menu__button-close'
)
const closedOpacity = document.querySelector('.feedback-menu__opacity')
const feedback = document.querySelector('.feedback-menu')

buttonMessage.addEventListener('click', () => {
  feedback.classList.add('feedback-menu-unset')
  bossCont.classList.add('posFixed')
})

buttonCloseMessage.addEventListener('click', () => {
  feedback.classList.remove('feedback-menu-unset')
  bossCont.classList.remove('posFixed')
  window.scrollTo({ top: 0 })
})
closedOpacity.addEventListener('click', () => {
  feedback.classList.remove('feedback-menu-unset')
  bossCont.classList.remove('posFixed')
  window.scrollTo({ top: 0 })
})

const buttonRequest = document.getElementById('button-call')
const buttonCloseRequest = document.querySelector(
  '.request-call-menu__button-close'
)
const clossedOpacity = document.querySelector('.request-call-menu__opacity')
const RequestCall = document.querySelector('.request-call-menu')

buttonRequest.addEventListener('click', () => {
  RequestCall.classList.add('feedback-menu-unset')
  bossCont.classList.add('posFixed')
})

buttonCloseRequest.addEventListener('click', () => {
  RequestCall.classList.remove('feedback-menu-unset')
  bossCont.classList.remove('posFixed')
  window.scrollTo({ top: 0 })
})
clossedOpacity.addEventListener('click', () => {
  RequestCall.classList.remove('feedback-menu-unset')
  bossCont.classList.remove('posFixed')
  window.scrollTo({ top: 0 })
})
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
