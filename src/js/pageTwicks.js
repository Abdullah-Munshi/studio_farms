function pageTwicks() {
  if (document.getElementById("preloader") !== null) {
    document.getElementById("preloader").classList.add("hide");
  }
  if (document.getElementById("mobile-menu") !== null) {
    const mobileBar = document.getElementById("mobile-menu");
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");
    mobileBar.addEventListener("click", (event) => {
      event.preventDefault();
      menu.classList.add("show");
      overlay.classList.add("show");
    });

    function closeMenu() {
      menu.classList.remove("show");
      overlay.classList.remove("show");
    }

    document.getElementById("close-menu").addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);
  }
}

export default pageTwicks;
