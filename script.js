function toggleMenu() {
    var menu = document.getElementById("menuLinks");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
    var hamburger = document.querySelector(".hamburger");
    hamburger.classList.toggle("clicked"); /* Add or remove "clicked" class */
}
