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
const noSlides = 5;
function goToNextSlider() {
  const currentSlide = swiper.activeIndex > noSlides ? 0 : swiper.activeIndex;
  swiper.slideTo(currentSlide + 1 > noSlides ? 1 : currentSlide + 1)
  console.log(swiper.activeIndex)
}
function goToPrevSlider() {

  if (swiper.activeIndex === 1) {
    swiper.activeIndex = 6
  }
  swiper.slideTo(swiper.activeIndex - 1)
  console.log(swiper.activeIndex, "swiper.activeIndex")
  // const currentSlide = swiper.activeIndex < 0 ? noSlides : currentSlide - 1
  // swiper.slideTo(currentSlide - 1 > noSlides ? 1 : currentSlide - 1)
  // console.log(swiper.activeIndex)
}
swiper.on("slideChange", function (e) {
  const currentSlide = swiper.activeIndex > noSlides ? 1 : swiper.activeIndex;
  for (let i = 1; i <= noSlides; i++) {
    if (i != currentSlide) {
      const eleColor = document.getElementById(`advertiser-cm-c-${i}`);
      eleColor.style.display = "none";
      const dash = document.getElementById(`advertiser-cm-underline-${i}`);
      dash.style.display = "none";
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
      const dash = document.getElementById(`advertiser-cm-underline-${i}`);
      dash.style.display = "inline";

      currentLightColorEle.style.display = "none";
      currentColorEle.style.transform = "scale(1.2)";
      currentColorEle.classList.add("adc-bounce");
    }
  }
});

// Function to change advertiser quote
function changeTestimonial(advertiser) {
  console.log(advertiser)
  swiper.slideTo(advertiser, 400);
}
