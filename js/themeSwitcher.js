function themeSwitcher() {
    var element = document.querySelector(".wrapper");
    element.classList.toggle("dark");
    var switcher = document.getElementById("switcher");
    if (element = document.querySelector(".dark")) {
        switcher.src = "https://shpilson.github.io/shpilson/img/moon.svg";
    } else {
        switcher.src = "https://shpilson.github.io/shpilson/img/day.svg";
    }
}
