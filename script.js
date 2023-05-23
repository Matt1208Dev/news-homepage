const btnOpen = document.querySelector(".btn-menu");
const btnClose = document.querySelector(".btn-close");
const menu = document.querySelector(".nav-group");
const overlay = document.querySelector(".menu-overlay");


let openMenu = false;

btnOpen.addEventListener("click", handleBtnClick);
btnClose.addEventListener("click", handleBtnClick);

// Clic sur le bouton open/close du menu mobile
function handleBtnClick() {
    openMenu = !openMenu;

    if (openMenu) {
        // btnClose.style.display = "block";
        menu.classList.add('active');
        overlay.classList.add('active');
    } else {
        // btnClose.style.display = "none";
        menu.classList.remove('active');
        overlay.classList.remove('active');
    }
}
