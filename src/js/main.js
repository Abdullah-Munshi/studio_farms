import Tabby from "tabbyjs";
import pageTwicks from "./pageTwicks";
import setupSlider from "./slider-config";
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("preloader").classList.add("hide");
  pageTwicks();
  if (document.querySelector(".hero-slider") !== null) {
    setupSlider();
  }

  if (document.querySelector("[data-tabs]") !== null) {
    let tabs = new Tabby("[data-tabs]");
  }
});
