/* ------------------------ #### This code is written by Norhan El-Deeb @2019 #### ------------------- */

/* -------------------------------------------Preloader section-------------------------------------- */
window.addEventListener('load', () => {
	const preloader = document.querySelector('.preloader');
	preloader.classList.add('preload-finish');
	document.body.style.overflow = 'visible';
});

/* -------------------------------------------------Scrolling buttons------------------------------------------- */
$(function () {
	//make a scroll to top button
	var scrollButton = $('.scroll-top');

	$(window).scroll(function () {

		if ($(this).scrollTop() >= 1000) {
			scrollButton.css("bottom", "60px");
		} else {
			scrollButton.css("bottom", "-60px");
		}
	});

	//click to scroll button to scroll up
	$('.scroll-top').click(function () {
		$('html , body').animate({
			scrollTop: 0
		}, 1000);

	});

	//click on the arrow down to scroll
	$('.header .arrow').click(function () {

		var navbar = document.querySelector('.navbar');

		$('html, body').animate({

			scrollTop: $(navbar).offset().top

		}, 1000);

	});

	//Contact Me Button scroll to contact section
	$('.header .buttons .hire').click(function () {

		var contact = document.querySelector('.contact');

		$('html , body').animate({

			scrollTop: $(contact).offset().top

		}, 2000);

	});

});