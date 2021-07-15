$(document).ready(function () {
  AOS.init();
  $('.scroll-line').click(function () {
    $("html,body").animate({
      scrollTop: $("#sevice-con").offset().top - 150
    }, 500);
  })

  if($(window).width() < 600){
$('.phone').after($('.scroll-line'));
  }
  $('.revealedBox').each(function(i){ 

    var childrenSpan = $(this).children('span').length;
  
    $(this).addClass('childrenSpan-' + childrenSpan);  
  
    if($(window).scrollTop() + $(window).height() > $(this).offset().top + $(this).outerHeight() ){ 
      $(this).addClass('revealedBox-in');       
    }   
  
  }); 
  
  $(window).scroll(function() { 
    $('.revealedBox').each(function(i){  
    if($(window).scrollTop() + $(window).height() > $(this).offset().top ){ 
      $(this).addClass('revealedBox-in');       
    }   
  }); 
    
  });

  // 步驟輪播畫面
  $(".owl-carousel").slick({
    dots: true,
    infinite: false,
    centerPadding: '0px',
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                centerMode: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }
        },
    ],
});
     


  //錨點
  $('.main-nav ul.anchor li a').click(function () {

    //Animate
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top - 90
    }, 400);
    return false;
  });

})
