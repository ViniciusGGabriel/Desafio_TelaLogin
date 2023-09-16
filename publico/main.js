function lightTheme() {
    var elemento = document.getElementById("bodyTheme");

    if (elemento.hasAttribute("data-bs-theme")) {
        elemento.removeAttribute("data-bs-theme");
    }
}

function darkTheme() {
    var elemento = document.getElementById("bodyTheme");

    elemento.setAttribute("data-bs-theme", "dark");
}