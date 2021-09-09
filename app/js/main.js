$(function () {
    $('.header__btn').on('click', function(){
        $('.rightside-menu').removeClass('rightside-menu--close');
    });


    $('.rightside-menu__close').on('click', function(){
        $('.rightside-menu').addClass('rightside-menu--close');
    });


    $('.header__btn-menu').on('click', function(){
        $('.menu').toggleClass('menu--open');
    });


    if($(window).width() < 651){
        $('.works-path__item--measuring').appendTo($('.works-path__items-box'));
    }


    const swiper = new Swiper('.swiper-container', {  
        loop: true,
        slidesPerView: 1,
        effect: "fade",
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
      });

      $('.contact-slider').slick({
        dots: true,  
        arrows: false,
        slidesToShow: 10,
        slidesToScroll: 10
      });


      $('.article-slider__box').slick({
           prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-left"><img src="images/slider-arrow-left.svg" alt="arrow"></button>',
           nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-right"><img src="images/slider-arrow-right.svg" alt="arrow"></button>'
      });

    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living'
        }
    });






});