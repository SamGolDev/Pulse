$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_l.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_r.png"></button>',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    dots: true,
                    adaptiveHeight: false
                }
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
        

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            }) 
        });
      };
        toggleSlide('.catalog-item__link');
        toggleSlide('.catalog-item__back');



        //Modal модальные окна скрипт
         /* обращение к классу          юзер кликает и происходит функция */
      $('[data-modal=consultation]').on('click', function() {
          /* обращение к классу         появление класса (анимация jquery) */
        $('.overlay, #consultation').fadeIn('200');
      });
      $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('200');
      });
     
       /*  чтобы текст названия товара менялся в модалке */
       /* обращение к кнопке, each-для каждой кнопке будет выполняться функция, i отвечает за номер элемента */
      $('.button_mini').each(function(i)  {
      /* this-та кнопку, на которую нажал будет выполняться функция   */ 
        $(this).on('click', function()  {
/* внутри модалки order есть класс descr, туда помещаем текст из класса внизу,eq i чтобы получить нужный текст,.text()-вытягиваем текст  */           
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('200');
        });
      });
  });






  
/* const slider = tns({             TINY SLIDER
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  });

document.querySelector('.prev').onclick = function () {
    slider.goTo('prev');
};

document.querySelector('.next').onclick = function () {
    slider.goTo('next');
};
 */

