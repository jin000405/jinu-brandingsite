new WOW().init();
(function ($) {
  "use strict";
  var PUS = {};
  /*==========================================
                        :: Mouse Cursor
                ==========================================*/
  PUS.mousecursor = function () {
    if ($("body")) {
      const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
      let n,
          i = 0,
          o = !1;
      (window.onmousemove = function (s) {
        o ||
          (t.style.transform =
           "translate(" + s.clientX + "px, " + s.clientY + "px)"),
          (e.style.transform =
           "translate(" + s.clientX + "px, " + s.clientY + "px)"),
          (n = s.clientY),
          (i = s.clientX);
      }),
        $("body").on("mouseenter", "a, .cursor-pointer", function () {
        e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
      }),
        $("body").on("mouseleave", "a, .cursor-pointer", function () {
        ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
          (e.classList.remove("cursor-hover"),
           t.classList.remove("cursor-hover"));
      }),
        (e.style.visibility = "visible"),
        (t.style.visibility = "visible");
    }
  };
  $(document).ready(function () {
    PUS.mousecursor(); // Mouse Cursor
  });
})(jQuery);

$(".chart-1").circleProgress({
  value: 0.92,
  size: 200,
  startAngle: -Math.PI / 2,
  reverse: true,
  thickness: 17,
  fill: { gradient: ["#FFB830", "#FFB830"] }
});
$(".chart-2").circleProgress({
  value: 0.89,
  size: 200,
  startAngle: -Math.PI / 2,
  reverse: true,
  thickness: 17,
  fill: { gradient: ["#FFB830", "#FFB830"] }
});
$(".chart-3").circleProgress({
  value: 0.88,
  size: 200,
  startAngle: -Math.PI / 2,
  reverse: true,
  thickness: 17,
  fill: { gradient: ["#FFB830", "#FFB830"] }
});
$(".chart-4").circleProgress({
  value: 0.8,
  size: 200,
  startAngle: -Math.PI / 2,
  reverse: true,
  thickness: 17,
  fill: { gradient: ["#FFB830", "#FFB830"] }
});
$(function () {
  //1. 버튼의 각각의 인덱스 받아오기
  $(".timeline_btn > button").each(function (i) {
    let indexNum = i;
    //2. .timeline_box(컨텐츠영역)의 각각의 인덱스 받아오기
    $(this).click(function () {
      //3. 버튼의 인덱스와 .timeline_box 인덱스 비교
      $(".timeline_box").each(function (j) {
        if (indexNum == j) {
          //4. 기존의 class 삭제 후 추가
          $(".timeline_box").removeClass("active");
          $(this).addClass("active");
        }
      });
    });
  });
});
var swiper = new Swiper(".swiper-box-1 .swiper", {
  pagination: {
    el: ".swiper-box-1  .swiper-pagination",
    type: "progressbar"
  },
  navigation: {
    nextEl: ".swiper-box-1  .swiper-button-next",
    prevEl: ".swiper-box-1  .swiper-button-prev"
  }
});


$(function () {
  //1. 버튼의 각각의 인덱스 받아오기
  $(".timeline_btn > button").each(function (i) {
    let indexNum = i;
    //2. .timeline_box(컨텐츠영역)의 각각의 인덱스 받아오기
    $(this).click(function () {
      //3. 버튼의 인덱스와 .timeline_box 인덱스 비교
      $(".timeline_box").each(function (j) {
        if (indexNum == j) {
          //4. 기존의 class 삭제 후 추가
          $(".timeline_box").removeClass("active");
          $(this).addClass("active");
        }
      });
    });
  });
});
const pathes = $("svg").find("path");
pathes.each(function (i, path) {
  var total_length = path.getTotalLength();
  console.log(total_length);
});
$(".section").each(function (index, el) {
  const $el = $(el);

  const no = index + 1;

  ScrollTrigger.create({
    trigger: $el,
    onEnter: () => {
      $("html").addClass(`section-${no}-actived`);

      if ( no == 4 ) {
        $(".chart-1").circleProgress({
          value: 0.92,
          size: 200,
          startAngle: -Math.PI / 2,
          reverse: true,
          thickness: 17,
          fill: { gradient: ["#FFB830", "#FFB830"] }
        });
        $(".chart-2").circleProgress({
          value: 0.89,
          size: 200,
          startAngle: -Math.PI / 2,
          reverse: true,
          thickness: 17,
          fill: { gradient: ["#FFB830", "#FFB830"] }
        });
        $(".chart-3").circleProgress({
          value: 0.88,
          size: 200,
          startAngle: -Math.PI / 2,
          reverse: true,
          thickness: 17,
          fill: { gradient: ["#FFB830", "#FFB830"] }
        });
        $(".chart-4").circleProgress({
          value: 0.8,
          size: 200,
          startAngle: -Math.PI / 2,
          reverse: true,
          thickness: 17,
          fill: { gradient: ["#FFB830", "#FFB830"] }
        });
      }
    },
    onEnterBack: () => {
      $("html").addClass(`section-${no}-actived`);
    },
    onLeave: () => {
      $("html").removeClass(`section-${no}-actived`);
    },
    onLeaveBack: () => {
      $("html").removeClass(`section-${no}-actived`);
    }
  });
});
$(window).resize(function() { 
  if($(window).width() < 1100) {
    $(".chart").circleProgress({
          size: 100,
      thickness: 3
        });
  }
});
$(window).resize(function() { 
  if($(window).width() > 1100) {
    $(".chart").circleProgress({
          size: 200,
      thickness: 17,
        });
  }
});
