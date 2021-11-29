function themeSwitcher() {
    const wrapper = document.querySelector(".wrapper");
    wrapper.classList.toggle("dark-wrapper");

    const introduce = document.querySelector(".header__introduce-text");
    introduce.classList.toggle("dark-introduce");

    const menu = document.querySelector(".header__menu-link");
    menu.classList.toggle("dark-menu");

    const works = document.querySelector(".works");
    works.classList.toggle("dark-works");

    const works_title = document.querySelector(".works__title");
    works_title.classList.toggle("dark-title");

    const works_card = document.querySelector(".works__card");
    works_card.classList.toggle("dark-card");

    const switcher = document.getElementById("switcher");
    if (wrapper !== document.querySelector(".dark-wrapper")) {
        switcher.src = "/img/day.svg";
    } else {
        switcher.src = "/img/moon.svg";
    }

}


