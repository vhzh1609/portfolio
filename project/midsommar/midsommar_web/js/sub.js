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


    //slide
    $('.person_2').slick({
        
        dots: false,
        autoplay: true,
        arrows: false,
    });


    
});