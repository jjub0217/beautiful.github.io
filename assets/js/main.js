$(function () {

  /** 
   *  @로딩페이지텍스트글자들을분리시키는라이브러리
   * 
  */
  const loadingText = new SplitType('.loading p', { types: 'words, chars', });
  
  
  /** 
   *  @로딩페이지텍스트글자들움직이는기능
   * 
  */
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


  /** 
   *  @slogan섹션텍스트글자들움직이는기능
   * 
  */
  const sloganText = new SplitType('.section-slogan .title-box p', { types: 'words, chars', });
  

  /** 
   *  @slogan섹션이미지의크기및텍스트글자들과타이틀움직이는기능
   * 
  */
  const sloganTl = gsap.timeline({
    paused: true,
  })
  sloganTl.from($(".section-slogan picture"), {
    scale: 1.1
  })
  .from($(".section-slogan .title .char"), {
    opacity: 0,
    stagger: 0.04,
    scale:0.5,
    ease:"elastic.out(1,0.4)",
  })
  .from($(".section-slogan .sub-title"), {
    opacity: 0,
    yPercent: 100
  })
  

  /** 
   *  @이미지들이스크롤에의해살짝씩위로올라가는기능
   * 
  */
  $("[data-scroll]").each(function(i, el) {
  gsap.to(el, {
    scrollTrigger: {
      trigger: el,
      start: "0% 100%",
      end: "100% 0%",
      markers: false,
      scrub:1,
      onEnter: function(){
        $(el).addClass("on")
      }
    },
    yPercent:15
  })
})


  /** 
   *  @products영역내에서background와콘텐츠들이스크롤에의해나타나는기능
   * 
  */
  $(".section-products .content").each(function(i, el) {
      prdTl = gsap.timeline({
        scrollTrigger:{
          trigger:el,
          start:"0% 100%",
          end:"100% 0%",
          markers:false,
        },
      })
      prdTl
      .from($(this).find(".background"),.5,{ scale:0, })
      .from($(this).find('.inner-content'),.5,{ opacity: 0})
  })


  /** 
   *  @gnb에서navitem들에마우스호버하면sublist가나타나는기능
   * 
  */
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


  /** 
   *  @햄버거버튼을클릭했을때gnb가나타나는기능
   * 
  */
  $('.menu-box button').click(function(){
    $(this).toggleClass('isAct')
    $('.gnb').toggleClass('isAct')
    $(this).find('.burgerBtn').toggleClass('isAct')
    $(this).find(".menu-text").toggleClass("on")
    if ($(this).attr('aria-expanded') === 'false') {
      $(this).attr('aria-expanded', 'true' )
    } else {
      $(this).attr('aria-expanded', 'false' )
    }
  })


  /** 
   *  @news영역에서스와이퍼들이차례대로나타나는기능
   * 
  */
  gsap.from($(".section-news .swiper-slide"), {
    scrollTrigger: {
      trigger: $(".section-news"),
      start: "0% 70%",
      end: "100% 0%",
      markers: true,
    },
    xPercent: 300,
    stagger: 0.3
  })


  /** 
   *  @exBanner영역에마우스호버했을때의기능
   * 
  */
  $(".section-exBanner .group-area").hover(function(){
    $(this).addClass("on")
  },function(){
    $(this).removeClass("on")
  })


  /** 
   *  @footer영역에서파도모양으로움직이는부분의라이브러리
   * 
  */
  $('#wave').wavify({
    height: 60,
    bones: 3,
    amplitude: 40,
    color: '#ff9daf',
    speed: .25
  });


  /**
   * @swiper기능
   * 
   */
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
  })


  /**
   * @swiper기능
   * 
   */
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
  })


})




