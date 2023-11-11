import Tabby from "tabbyjs";
import pageTwicks from "./pageTwicks";
import setupSlider from "./slider-config";
document.addEventListener("DOMContentLoaded", function () {
  pageTwicks();
  if (document.querySelector(".hero-slider") !== null) {
    setupSlider();
  }

  let tabs;
  if (document.querySelector("[data-tabs]") !== null) {
    tabs = new Tabby("[data-tabs]");
  }

  var urlParams = new URLSearchParams(window.location.search);
  var activeTab = urlParams.get("tab");
  if (activeTab) {
    tabs.toggle(activeTab);
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 0);
  }
});
