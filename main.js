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

// make the navigation bar interactive with the scroll
let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  if (currentScroll > lastScrollTop) {
    document.querySelector('.navbar').classList.add('hide');
  } else {
    document.querySelector('.navbar').classList.remove('hide');
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);