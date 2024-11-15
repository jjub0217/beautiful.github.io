window.onload = function () {
function setViewportHeight() {
  // 현재 뷰포트 높이를 가져와서 --vh CSS 변수를 설정
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

// 페이지 로드 시 및 뷰포트 크기 변경 시 실행
setViewportHeight();
window.addEventListener("resize", setViewportHeight);
  const loadingText = new SplitType(".loading p", { types: "words, chars" });

  const sloganText = new SplitType(".section_visual .title_box .title", {
    types: "words, chars",
  });

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


  const loadingTl = gsap.timeline({
    onComplete: function () {
      sloganTl.play();
    },
  });


  loadingTl
    .to($(".loading .char"), {
      opacity: 1,
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
      yPercent: 13,
    });
  });

  $(".menu_button").click(function () {
    $(".gnb").toggleClass("is_active");
    $(".gnb").attr("aria-hidden", "false");
    if ($(this).attr("aria-expanded") === "false") {
      $(this).attr("aria-expanded", "true");
      $(this).attr("aria-labelledby", "메뉴 닫기");
      $(this).attr("aria-pressed", "true");
      $(".container").addClass("is_hidden");
      $(".footer").addClass("is_hidden");
    } else {
      $(this).attr("aria-expanded", "false");
      $(this).attr("aria-labelledby", "메뉴 열기");
      $(this).attr("aria-pressed", "false");
      $(".container").removeClass("is_hidden");
      $(".footer").removeClass("is_hidden");
    }
  });

  $(".to_home").click(function (e) {
    e.preventDefault();
    if ($(".gnb").has("is_active")) {
      $(".gnb").removeClass("is_active");
      $(".menu_button").attr("aria-pressed", "false");
      $(".menu_button").attr("aria-expanded", "false");
      $("html, body").animate({ scrollTop: 0 }, 800);
    }
    return;
  });

  $(".section_products .product").each(function (i, el) {
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
      .from($(this).find(".content"), 0.5, { opacity: 0 });
  });

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

  const sectionNews = new Swiper(".section_news .swiper", {
    navigation: {
      nextEl: ".btn_next",
      prevEl: ".btn_prev",
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

  $("#wave").wavify({
    height: 60,
    bones: 3,
    amplitude: 40,
    color: "#e43d67",
    speed: 0.2,
  });
};





  