
const burgerMenu = document.querySelector(".header__burger-menu");
const popupButton = document.querySelector(".popup-menu__button");

const popupMenu = document.querySelector(".popup-menu");

burgerMenu.addEventListener("click", () => {
    popupMenu.classList.add("popup-menu--actived");        
});

popupButton.addEventListener("click", () => {
    popupMenu.classList.remove("popup-menu--actived");
});

//

document.addEventListener("click", (e) =>{

    if (e.target.classList.contains('popup-menu__item-link')){

        const popupMenu = document.querySelector(".popup-menu");

        popupMenu.classList.remove("popup-menu--actived");
    }
})