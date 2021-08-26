$(function () {
    $('.header__btn').on('click', function(){
        $('.rightside-menu').removeClass('rightside-menu--close');
    });


    $('.rightside-menu__close').on('click', function(){
        $('.rightside-menu').addClass('rightside-menu--close');
    });


    const swiper = new Swiper('.swiper-container', {  
        loop: true,
        slidesPerView: 1,
        effect: "fade",
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
      });

    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living'
        }
    });






});