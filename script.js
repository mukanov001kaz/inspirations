let menuOverlay = document.querySelector(".header__menu-overlay"),
    menuList = document.querySelector(".header__list"),
    menuClick = document.querySelector(".header__menu-mobail-button"),
    menuLink = document.querySelector(".header__link a");

menuClick.addEventListener("click", function (e) {
    console.log(e.target);
    menuList.classList.toggle("active");
    menuOverlay.classList.toggle("active");
    document.body.style.overflow = "hidden";
    // closeModal();
});

function closeModal(event) {
    console.log(event.target);
}

menuList.addEventListener("click", function (event) {
    if (!event.target.classList.contains("menuLink")) {
        console.log(event.target);
    }
});
