$(function () {
  
  $('.gnb .nav-item').hover(function(e){
      console.log(
      $(this).find('.sub-list').length)
      // 이벤트의 타켓인 this의 자식들에 sub-list 가 있다면 length 는 1 이 나오고, 없다면 0 이 나온다.
      if($(this).find('.sub-list').length){
        // 이벤트 타겟인 this의 자식들에 sub-list 에 클래스 on 붙힘
        $(this).find('.sub-list').addClass('on');
        $('.gnb').addClass('on')
      }
  },function(){
      $(this).find('.sub-list').removeClass('on');
      $('.gnb').removeClass('on')
  })

  $('.menu-box').click(function(){
    console.log($(this));
    $('.gnb').toggleClass('isAct')
    $('burgerBtn').toggleClass('isAct')
    $(this).toggleClass('isAct')
    if ($(".burgerBtn").attr('aria-expanded') === 'false') {
      $('.burgerBtn').attr('aria-expanded', 'true' )
    } else {
      $('.burgerBtn').attr('aria-expanded', 'false' )
    }
  })




  // pc 에서는 손가락으로 슬라이드가 움직여지면 안된다. 그렇기 때문에 옵션을 줘야한다. ===> touchRatio
  const sectionBanner = new Swiper('.section-banner .swiper',{
      loop: true,
      autoplay: true,
      speed: 40000,
      slidesPerView: 1, 
      
      breakpoints: {
        1229:{
          slidesPerView: 2, 
        }
      },
      autoplay: {
        delay: 1,
      },
  } )



  const sectionNews = new Swiper('.section-news .swiper',{
      navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev"
    },
        slidesPerView: 2,    
        spaceBetween: 15,
        breakpoints: {
    
        960: {
          slidesPerView: 3,
          spaceBetween: 15
      
        },
        1025:{
          slidesPerView: 3.3,    
          spaceBetween: 15,
        }
      },
  } )


})




