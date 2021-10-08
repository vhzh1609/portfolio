//문서준비 이벤트
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


    //2차메뉴
    $('.depth2').hide();

    $('.gnb>li').mouseenter(function(){
        $(this).children('.depth2').stop().slideDown();
    });

    $('.gnb>li').mouseleave(function(){
        $(this).children('.depth2').stop().slideUp();
    });


    //메인배너
    $('.mb').slick({
      autoplay: true,
      dots: true,
      fade: true
    });

    //.menu안에 h3에 클릭했을 때
    //.menu안에 li에 active 클래스 추가
    //클릭한 형제요소에 active클래스 제거 
    $('.menu >li:nth-child(1)').addClass('active');
    $('.menu>li>h3').click(function(){
      $(this).parent().addClass('active').siblings().removeClass('active');
    });

  
});