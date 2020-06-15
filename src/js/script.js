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
                      dots: true,
                  }
              },
        ]
    });
     $('ul.BlockCatalog-ElemTabs').on('click', 'li:not(.BlockCatalog-ElemTab_modActive)', function () {
         $(this)
             .addClass('BlockCatalog-ElemTab_modActive').siblings().removeClass('BlockCatalog-ElemTab_modActive')
             .closest('div.BlockContainer').find('div.BlockCatalog-ElemContent').removeClass('BlockCatalog-ElemContent_modActive').eq($(this).index()).addClass('BlockCatalog-ElemContent_modActive');
     });

    // $('.BlockItem-ElemLink').each(function (i) {
    //     $(this).on('click', function (e) {
    //         e.preventDefault();
    //         $('.BlockItem-ElemContent').eq(i).toggleClass('BlockItem-ElemContent_modActive');
    //         $('.BlockItem-ElemList').eq(i).toggleClass('BlockItem-ElemList_modActive');
    //     })
    // });

    // $('.BlockItem-ElemBack').each(function (i) {
    //     $(this).on('click', function (e) {
    //         e.preventDefault();
    //         $('.BlockItem-ElemContent').eq(i).toggleClass('BlockItem-ElemContent_modActive');
    //         $('.BlockItem-ElemList').eq(i).toggleClass('BlockItem-ElemList_modActive');
    //     })
    // });

    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.BlockItem-ElemContent').eq(i).toggleClass('BlockItem-ElemContent_modActive');
                $('.BlockItem-ElemList').eq(i).toggleClass('BlockItem-ElemList_modActive');
            })
        });
    };
    toggleSlide('.BlockItem-ElemLink');
    toggleSlide('.BlockItem-ElemBack');

    // Modal

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultion').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay,#consultation,#thanks,#order').fadeOut('slow')
    });
    // $('.BlockButton_modButtonMini').on('click', function () {
    //     $('.overlay, #order').fadeIn('slow');
    // });
    $('.BlockButton_modButtonMini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.BlockItem-ElemSubtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });

    // $('#consultation-form').validate();
    // $('#consultion form').validate({
    //     rules: {
    //          name: {
    //              required: true,
    //              minlength: 2
    //          },
    //         phone: "required",
    //         email: {
    //             required: true,
    //             email: true
    //         }
    //     },
    //     messages: {
    //         name: {
    //             required: "Пожалуйста, ведите имя",
    //             minlength: jQuery.validator.format("Введите {0} символа!")
    //         },
    //         phone: "Пожалуйста  ведите  свой номер тел.",
    //         email: {
    //             required: "Пожалуста ведите свою електроную почту",
    //             email: "name@domain.com"
    //         }
    //     }
    // });
    // $('#order form').validate();

    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, ведите имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                },
                phone: "Пожалуйста  ведите  свой номер тел.",
                email: {
                    required: "Пожалуста ведите свою електроную почту",
                    email: "name@domain.com"
                }
            }
        });
    };

    validateForms('#consultation-form');
    validateForms('#consultion form');
    validateForms('#order form');

    $('input[name=phone]').mask("+38 (999) 999-99-99");

    $('form').submit(function (e) {
        e.preventDefault(); //позволят отменить стандартное  поведения  браузера  чтоб не  перерезагружалась страница.
        $.ajax({
            type: "POST", // отдаю на  сервер даные 
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();//закриваеться окошко формы 
            $('.overlay, #thanks').fadeIn('slow');//открываеться окошко спасибо за закоз.

            $('form').trigger('reset');
        });
        return false;
    });

});
