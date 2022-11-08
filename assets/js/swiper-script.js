const swiper = new Swiper(".swiper", {
  loop: true,
  speed: 300,
  effect: "cube",
  cubeEffect: {
    slideShadows: false,
    shadow: false,
  },
  autoplay: {
    delay: 2000,
  },
});
swiper.on("slideChange", function () {
  const noSlides = document.querySelectorAll(".swiper-slide").length - 2;
  const currentSlide = swiper.activeIndex > noSlides ? 1 : swiper.activeIndex;
  for (let i = 1; i <= noSlides; i++) {
    if (i != currentSlide) {
      const eleColor = document.getElementById(`advertiser-cm-c-${i}`);
      eleColor.style.display = "none";
      const eleLightColor = document.getElementById(`advertiser-cm-${i}`);
      eleLightColor.style.display = "inline";
      eleColor.style.transform = "none";
    } else {
      const currentColorEle = document.getElementById(
        `advertiser-cm-c-${currentSlide}`
      );
      currentColorEle.style.display = "inline";
      const currentLightColorEle = document.getElementById(
        `advertiser-cm-${currentSlide}`
      );
      currentLightColorEle.style.display = "none";
      currentColorEle.style.transform = "scale(1.2)";
      currentColorEle.classList.add("adc-bounce");
    }
  }
});
// Function to change advertiser quote
function changeTestimonial(advertiser) {
  swiper.slideTo(advertiser, 400);
}
