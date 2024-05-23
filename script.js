let menuOverlay = document.querySelector(".header__menu-overlay"),
    menuList = document.querySelector(".header__list"),
    menuClick = document.querySelector(".header__menu-mobail-button"),
    menuLink = document.querySelector(".header__link a");

menuClick.addEventListener("click", function () {
    menuList.classList.toggle("active");
    menuOverlay.classList.toggle("active");
    document.body.style.overflow = "hidden";
});

menuList.addEventListener("click", function (event) {
    if (event.target == menuList) {
        menuList.classList.remove("active");
        menuOverlay.classList.remove("active");
        document.body.style.overflow = "";
    }
});
