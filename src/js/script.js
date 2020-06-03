$(document).ready(function () {
    $('.BlockCarousel-ElemIner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right-solid.png"></button>',
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
     $('ul.BlockCatalog-ElemTabs').on('click', 'li:not(.BlockCatalog-ElemTab_modActive)', function () {
         $(this)
             .addClass('BlockCatalog-ElemTab_modActive').siblings().removeClass('BlockCatalog-ElemTab_modActive')
             .closest('div.BlockContainer').find('div.BlockCatalog-ElemContent').removeClass('BlockCatalog-ElemContent_modActive').eq($(this).index()).addClass('BlockCatalog-ElemContent_modActive');
     });

});
