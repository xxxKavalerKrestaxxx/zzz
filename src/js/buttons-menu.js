const buttonBurger = document.querySelector('.button-categories')
const buttonCloseBurger = document.querySelector('.button-close-burger')
const closeOpacity = document.querySelector('.categories-menu__opacity')
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
const buttonMessageTwo = document.querySelector('.button-message-need-two')
const buttonCloseMessage = document.querySelector(
  '.feedback-menu__button-close'
)
const closedOpacity = document.querySelector('.feedback-menu__opacity')
const feedback = document.querySelector('.feedback-menu')

buttonMessage.addEventListener('click', () => {
  feedback.classList.add('feedback-menu-unset')
  bossCont.classList.add('posFixed')
})
buttonMessageTwo.addEventListener('click', () => {
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

const buttonRequest = document.querySelector('.button-call')
const buttonRequestTwo = document.querySelector('.button-call-two')
const buttonCloseRequest = document.querySelector(
  '.request-call-menu__button-close'
)
const clossedOpacity = document.querySelector('.request-call-menu__opacity')
const RequestCall = document.querySelector('.request-call-menu')

buttonRequest.addEventListener('click', () => {
  RequestCall.classList.add('feedback-menu-unset')
  bossCont.classList.add('posFixed')
})
buttonRequestTwo.addEventListener('click', () => {
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
