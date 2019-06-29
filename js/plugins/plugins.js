$(function () {
  //WOW & Animate css plugin
  new WOW().init();

  //typed js
  var typed = new Typed(".typed", {
    strings: ["I am Norhan El-Deeb", "Front-End Developer"],
    smartBackspace: true,
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    loopCount: Infinity
  });

  //fit text
  $('.about-me').fitText(2.2, {
    minFontSize: '35px',
    maxFontSize: '55px'
  });

  $('.card-title').fitText(1.2, {
    minFontSize: '25px',
    maxFontSize: '40px'
  });

  $('.header h3').fitText(1.5, {
    minFontSize: '15px',
    maxFontSize: '25px'
  });

  $('.skills h1').fitText(2.2, {
    minFontSize: '30px',
    maxFontSize: '40px'
  });

  $('.services h1').fitText(2.2, {
    minFontSize: '30px',
    maxFontSize: '40px'
  });

  $('.services .items h4').fitText(2.2, {
    minFontSize: '20px',
    maxFontSize: '30px'
  });

  $('.work h1').fitText(1.2, {
    minFontSize: '25px',
    maxFontSize: '40px'
  });

  $('.work .modal .modal-title').fitText(1.6, {
    minFontSize: '20px',
    maxFontSize: '30px'
  });

  $('.work .modal .modal-body h4').fitText(1.6, {
    minFontSize: '15px',
    maxFontSize: '20px'
  });

  $('.contact h1').fitText(2, {
    minFontSize: '30px',
    maxFontSize: '40px'
  });

  //owlCarousel
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1
      },
      // breakpoint from 480 up
      768: {
        items: 2
      },
      // breakpoint from 768 up
      992: {
        items: 3
      }
    }

  });

});