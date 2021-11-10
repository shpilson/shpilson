function themeSwitcher() {
    var wrapper = document.querySelector(".wrapper");
    wrapper.classList.toggle("dark-wrapper");

    var switcher = document.getElementById("switcher");
    if (wrapper = document.querySelector(".dark-wrapper")) {
        switcher.src = "https://shpilson.github.io/shpilson/img/moon.svg";
    } else {
        switcher.src = "https://shpilson.github.io/shpilson/img/day.svg";
    }

    var introduce = document.querySelector(".header__introduce-text");
    introduce.classList.toggle("dark-introduce");

    var menu = document.querySelector(".header__menu-link");
    menu.classList.toggle("dark-menu");

    var works = document.querySelector(".works");
    works.classList.toggle("dark-works");

}


