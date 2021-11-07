function themeSwitcher() {
    var wrapper = document.querySelector(".wrapper");
    wrapper.classList.toggle("dark");

    var introduce = document.querySelector(".header__introduce-text");
    introduce.classList.toggle("white");

    var switcher = document.getElementById("switcher");
    if (wrapper = document.querySelector(".dark")) {
        switcher.src = "https://shpilson.github.io/shpilson/img/moon.svg";
    } else {
        switcher.src = "https://shpilson.github.io/shpilson/img/day.svg";
    }
}
