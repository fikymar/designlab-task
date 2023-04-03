'use strict'

let navLinks = document.querySelectorAll('.nav-link')
let navList = document.querySelector('.nav-list')
const hamburger = document.querySelector('.hamburger')
const line1 = document.querySelector('.hamburger__first')
const line2 = document.querySelector('.hamburger__second')
const line3 = document.querySelector('.hamburger__third')

navLinks.forEach((link) => {
	// Active link onload
	if (link.href === window.location.href) {
		link.classList.add('active')
	}

	link.addEventListener('click', function () {
		navLinks.forEach((notActiveLink) => {
			notActiveLink.classList.remove('active')
		})
		link.classList.add('active')

		// Close mobile menu
		navList.classList.remove('open')
		line1.classList.toggle('cross--first')
		line2.classList.toggle('cross--second')
		line3.classList.toggle('cross--third')
	})
})

//nav
hamburger.addEventListener('click', () => {
	navList.classList.toggle('open')

	line1.classList.toggle('cross--first')
	line2.classList.toggle('cross--second')
	line3.classList.toggle('cross--third')
})
