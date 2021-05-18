let theme = document.querySelector('.theme');
let themeButton = document.querySelector('.btn');

themeButton.onclick = function() {
    theme.classList.toggle('dark');
    theme.classList.toggle('darkblue');
    }