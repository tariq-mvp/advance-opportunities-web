jQuery(document).ready(function () {
  var tl = new TimelineLite({ delay: 1 }),
    firstBg = document.querySelectorAll(".text__first-bg"),
    secBg = document.querySelectorAll(".text__second-bg"),
    word = document.querySelectorAll(".text__word");

  tl.to(firstBg, 0.3, { scaleX: 1 })
    .to(secBg, 0.3, { scaleX: 1 })
    .to(word, 0.1, { opacity: 1 }, "-=0.1")
    .to(firstBg, 0.2, { scaleX: 0 })
    .to(secBg, 0.2, { scaleX: 0 });

  trigger = true;

  var tl2 = new TimelineLite({ delay: 2 });

  tl2.to($(".text__word"), 0.1, { opacity: 0 }).pause();
});
