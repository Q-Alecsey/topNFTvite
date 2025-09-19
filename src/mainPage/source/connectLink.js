
// подключение ссылок(кнопок) для скролла по нажатию
export function connectLink(){

    document.addEventListener("click", (e) =>{

        if (e.target.classList.contains('popup-menu__item-link')){

            const popupMenu = document.querySelector(".popup-menu");

            popupMenu.style.transition = "";
            popupMenu.classList.remove("popup-menu--actived");

        }
    })
}