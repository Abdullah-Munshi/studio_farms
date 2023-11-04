import Splide from "@splidejs/splide";
function setupSlider() {
  const heroSlider = new Splide(".hero-slider", {
    arrows: false,
  });
  heroSlider.mount();
}

export default setupSlider;
