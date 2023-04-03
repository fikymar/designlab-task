document.addEventListener('DOMContentLoaded', function () {
	var splide = new Splide('.splide', {
		type: 'loop',
		height: '100vh',
		width: '100vw',
		autoplay: true,
		perPage: 1,
		breakpoints: {
			768: {
				height: '75vh',
				width: '100vw',
			},
		},
	})
	splide.mount()
})
