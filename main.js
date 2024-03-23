const mobileMenu = document.querySelector('.mobile-menu')
const navMenu = document.querySelector('.nav-items')
let toggle = false

const showNavMenu = () => {
  toggle = !toggle
  if (toggle) {
    navMenu.classList.add('nav-items-display')
    return
  }
  navMenu.classList.remove('nav-items-display')

}

mobileMenu.addEventListener('click', showNavMenu)