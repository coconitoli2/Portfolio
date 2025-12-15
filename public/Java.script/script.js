console.log(" script.js chargé !");

const icon = document.getElementById("iconGestion");
const menu = document.getElementById("menuDevoirs");

if (icon) { // sécurité au cas où
    icon.addEventListener("click", () => {
        menu.style.display = (menu.style.display === "block") ? "none" : "block";
    });

    document.addEventListener("click", (e) => {
        if (!icon.contains(e.target) && !menu.contains(e.target)) {
            menu.style.display = "none";
        }
    });
}


