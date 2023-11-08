$(function () {


  const loadingText = new SplitType('.loading p', { types: 'words, chars', });

  // 미리 gsap세팅
  // gsap.set()


  const loadingTl = gsap.timeline({
    // loadingTl 이 완료된 후에 실행될 콜백함수
    onComplete: function(){
      sloganTl.play()
    }
  })
  loadingTl.to($(".loading .char"), {
    opacity: 1,
    // 한글자씩 0.1초씩 차례대로 딜레이가 되서 opacity 1이 된다.
    stagger: 0.06,
    scale:1,
    ease:"elastic.out(1,0.3)",
  })
  .addLabel('a')
  .to($(".loading"), {
    background: "#ff9daf",
  },'a')
  .to($(".loading p"), {
    opacity: 0,
  },'a')
  .to($(".loading"), {
    yPercent: -150
  })

  const gnbTl = gsap.timeline({})
  gnbTl.to($(".gnb"), {

  })



  
  // const sloganTl = gsap.timeline({
  //   paused: true
  // })
  // const sloganText = new SplitType('.section-slogan .title-box p', { types: 'words, chars', });
  
  // sloganTl.from($(".section-slogan picture"), {
  //   scale: 1.1
  // })
  // .from($(".section-slogan .title .char"), {
  //   opacity: 0,
  //   stagger: 0.04,
  //   scale:0.5,
  //   ease:"elastic.out(1,0.4)",
  // })
  // .from($(".section-slogan .sub-title"), {
  //   opacity: 0,
  //   yPercent: 100
  // })


  $('.gnb .nav-item').hover(function(e){
      console.log(
      $(this).find('.sub-list').length)

      if($(this).find('.sub-list').length){
        $(this).find('.sub-list').addClass('on');
        $('.gnb').addClass('on')
      }
  },function(){
      $(this).find('.sub-list').removeClass('on');
      $('.gnb').removeClass('on')
  })



  $('.menu-box').click(function(){
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




