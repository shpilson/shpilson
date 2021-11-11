function themeSwitcher() {
    var wrapper = document.querySelector(".wrapper");
    wrapper.classList.toggle("dark-wrapper");

    var introduce = document.querySelector(".header__introduce-text");
    introduce.classList.toggle("dark-introduce");

    var menu = document.querySelector(".header__menu-link");
    menu.classList.toggle("dark-menu");

    var works = document.querySelector(".works");
    works.classList.toggle("dark-works");

    var works_title = document.querySelector(".works__title");
    works_title.classList.toggle("dark-title");

    var works_card = document.querySelectorAll(".works__card");
    works_card[0].classList.toggle("dark-card");

    var switcher = document.getElementById("switcher");
    if (wrapper = document.querySelector(".dark-wrapper")) {
        switcher.src = "https://shpilson.github.io/shpilson/img/moon.svg";
    } else {
        switcher.src = "https://shpilson.github.io/shpilson/img/day.svg";
    }

}


