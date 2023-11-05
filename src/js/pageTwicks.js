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

  if (document.getElementById("mobile-menu") !== null) {
    const mobileBar = document.getElementById("mobile-menu");
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");
    mobileBar.addEventListener("click", (event) => {
      event.preventDefault();
      menu.classList.add("show");
      overlay.classList.add("show");
    });

    document.getElementById("close-menu").addEventListener("click", () => {
      menu.classList.remove("show");
      overlay.classList.remove("show");
    });
  }
}

export default pageTwicks;
