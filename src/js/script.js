$(document).ready(function () {
    $('.BlockCarousel-ElemIner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right-solid.png"></button>',
        responsive: [
              {
                  breakpoint: 982,
                  settings: {
                      arrows: false,
                      dots: true
                  }
              },
        ]
    });
});
