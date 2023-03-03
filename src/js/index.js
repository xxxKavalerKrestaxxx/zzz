import '../scss/style.scss'
import './swiper-swp'
import './buttons-menu'

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
