function toggleMenu() {
    document.getElementById("burger_navigation").classList.toggle("open");
    document.getElementById("burger_icon").classList.toggle("open");
}

const x = document.getElementById("burger_icon");

x.onclick = toggleMenu;