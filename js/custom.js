
  $(function () {

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    // AOS ANIMATION
    AOS.init({
      disable: 'mobile',
      duration: 800,
      anchorPlacement: 'center-bottom'
    });


    // SMOOTHSCROLL NAVBAR
    $(function() {
      $('.navbar a, .hero-text a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });    
  });

  //--------------- Spinning KR Logo----------------------------

const image = document.querySelector('#logo');

let spinning = true;
degrees = 0;

setInterval(() => {
    degrees++;
    image.style.transform = 'rotate(' + degrees + 'deg)';
}, 12.5);
 
    

