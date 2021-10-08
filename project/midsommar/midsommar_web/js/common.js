$(document).ready(function(){


    //스크롤 트리거
  $(window).scroll(function () {
    $('.ani_stop').each(function (i) {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight() * .3;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_object) {
            $(this).removeClass('ani_stop');
        }
        if (bottom_of_window < bottom_of_object) {
            $(this).addClass('ani_stop');
        }
    });
  });


  //mmenu
  $('.mgnb_wrap').hide();
    $('.mmenu').click(function(){
        $('.mgnb_wrap').fadeIn();
    });
    $('.close').click(function(){
        $('.mgnb_wrap').fadeOut();
    });

    //main slide
    $('.gal').slick({
        centerMode: true,
        dots: false,
        autoplay: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
          
});