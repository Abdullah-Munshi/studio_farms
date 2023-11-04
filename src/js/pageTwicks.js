function pageTwicks() {
  // Header background change
  function changeHeader() {
    const header = document.querySelector("header");
    if (window.scrollY > 5) {
      header.classList.add("change");
    } else {
      header.classList.remove("change");
    }
  }
  window.addEventListener("scroll", changeHeader);
}

export default pageTwicks;
