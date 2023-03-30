document.addEventListener("DOMContentLoaded", function () {
	var splide = new Splide(".splide", {
		type: "fade",
		height: "90vh",
		width: "100vw",
		perPage: 1,
		breakpoints: {
			640: {
				height: "50vh",
				width: "100vw",
			},
		},
	});
	splide.mount();
});
