let navLinks = document.querySelectorAll('.nav-link')
function setActiveLink() {
	navLinks.forEach((link) => {
		// console.log(link.href, window.location.href)
		if (link.href === window.location.href) {
			link.classList.add('bg-primary')
		} else link.classList.remove('bg-primary')
	})
}
setActiveLink()
