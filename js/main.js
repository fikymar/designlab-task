let navLinks = document.querySelectorAll('.nav-link')
function setActiveLink() {
	navLinks.forEach((link) => {
		// console.log(link.href, window.location.href)
		if (link.href === window.location.href) {
			link.setAttribute('aria-current', 'page')
		}
	})
}
setActiveLink()
