$(function () {
  /**
   *  @로딩페이지텍스트글자들을분리시키는라이브러리
   *
   */
  const loadingText = new SplitType(".loading p", { types: "words, chars" });

  /**
   *  @로딩페이지텍스트글자들움직이는기능
   *
   */
  const loadingTl = gsap.timeline({
    // loadingTl 이 완료된 후에 실행될 콜백함수
    onComplete: function () {
      sloganTl.play();
    },
  });
  loadingTl
    .to($(".loading .char"), {
      opacity: 1,
      // 한글자씩 0.1초씩 차례대로 딜레이가 되서 opacity 1이 된다.
      stagger: 0.06,
      scale: 1,
      ease: "elastic.out(1,0.3)",
    })
    .addLabel("a")
    .to(
      $(".loading"),
      {
        background: "#e43d67",
      },
      "a"
    )
    .to(
      $(".loading p"),
      {
        opacity: 0,
      },
      "a"
    )
    .to($(".loading"), {
      yPercent: -160,
    });

  /**
   *  @slogan섹션텍스트글자들움직이는기능
   *
   */
  const sloganText = new SplitType(".section_visual .title_box p", {
    types: "words, chars",
  });

  /**
   *  @slogan섹션이미지의크기및텍스트글자들과타이틀움직이는기능
   *
   */
  const sloganTl = gsap.timeline({
    paused: true,
  });
  sloganTl
    .from($(".section_visual picture"), {
      scale: 1.1,
    })
    .from($(".section_visual .title .char"), {
      opacity: 0,
      stagger: 0.04,
      scale: 0.5,
      ease: "elastic.out(1,0.4)",
    })
    .from($(".section_visual .sub_title"), {
      opacity: 0,
      yPercent: 100,
    });

  /**
   *  @이미지들이스크롤에의해살짝씩위로올라가는기능
   *
   */
  function applyScrollAnimation(yPercentValue) {
    $("[data-scroll]").each(function (i, el) {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "0% 100%",
          end: "100% 0%",
          markers: false,
          scrub: 1,
          onEnter: function () {
            $(el).addClass("on");
          },
        },
        yPercent: yPercentValue,
      });
    });
  }

  /**
   * 초기 브라우저 너비에 따른 yPercent 설정
   *
   */
  var yPercentValue = window.matchMedia("(max-width: 1080px)").matches
    ? -30
    : 13;
  applyScrollAnimation(yPercentValue);

  /**
   * 브라우저 너비가 변경될 때 yPercent 업데이트
   *
   */
  window
    .matchMedia("(max-width: 1080px)")
    .addEventListener("change", function (event) {
      yPercentValue = event.matches ? -30 : 13;
      applyScrollAnimation(yPercentValue);
    });

  /**
   *  @products영역내에서background와콘텐츠들이스크롤에의해나타나는기능
   *
   */
  $(".section_products .content").each(function (i, el) {
    prdTl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "0% 100%",
        end: "100% 0%",
        markers: false,
      },
    });
    prdTl
      .from($(this).find(".background"), 0.5, { scale: 0 })
      .from($(this).find(".inner_content"), 0.5, { opacity: 0 });
  });

  /**
   *  @햄버거버튼을클릭했을때gnb가나타나는기능
   *
   */
  $(".menu_button").click(function () {
    $(".gnb").toggleClass("is_active");
    if ($(this).attr("aria-expanded") === "false") {
      $(this).attr("aria-expanded", "true");
      $(this).attr("aria-labelledby", "메뉴 닫기");
      $(this).attr("aria-selected", "true");
    } else {
      $(this).attr("aria-expanded", "false");
      $(this).attr("aria-labelledby", "메뉴 열기");
      $(this).attr("aria-selected", "false");
    }
  });

  /**
   *  @TOP버튼을클릭했을때gnb가사라지는기능
   *
   */
  $(".to_home").click(function (e) {
    e.preventDefault();
    if ($(".gnb").has("is_active")) {
      $(".gnb").removeClass("is_active");
      $(".menu_button").attr("aria-selected", "false");
      $(".menu_button").attr("aria-expanded", "false");
      $("html, body").animate({ scrollTop: 0 }, 800);
    }
    return;
  });

  /**
   *  @news영역에서스와이퍼들이차례대로나타나는기능
   *
   */
  gsap.from($(".section_news .swiper-slide"), {
    scrollTrigger: {
      trigger: $(".section_news"),
      start: "0% 70%",
      end: "100% 0%",
      markers: false,
    },
    xPercent: 300,
    stagger: 0.3,
  });

  /**
   *  @section_link_banner영역에마우스호버했을때의기능
   *
   */
  $(".section_link_banner .group-area").hover(
    function () {
      $(this).addClass("on");
    },
    function () {
      $(this).removeClass("on");
    }
  );

  /**
   *  @footer영역에서파도모양으로움직이는부분의라이브러리
   *
   */
  $("#wave").wavify({
    height: 60,
    bones: 3,
    amplitude: 40,
    color: "#e43d67",
    speed: 0.25,
  });

  /**
   * @swiper기능
   *
   */
  // pc 에서는 손가락으로 슬라이드가 움직여지면 안된다. 그렇기 때문에 옵션을 줘야한다. ===> touchRatio
  const sectionBanner = new Swiper(".section_banner .swiper", {
    loop: true,
    autoplay: true,
    speed: 40000,
    slidesPerView: 1,
    breakpoints: {
      1229: {
        slidesPerView: 2,
      },
    },
    autoplay: {
      delay: 1,
    },
  });

  /**
   * @swiper기능
   *
   */
  const sectionNews = new Swiper(".section_news .swiper", {
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
    slidesPerView: 2,
    spaceBetween: 15,
    breakpoints: {
      960: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1162: {
        slidesPerView: 5.3,
        spaceBetween: 15,
      },
    },
  });
})





  