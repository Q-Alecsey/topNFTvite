
let lastSizeofWindow = 1000;

//Изменение footer'а 
export function resizeFooter(){

    const currentWidth = document.documentElement.clientWidth;

    if ( (currentWidth <= 550 && lastSizeofWindow) > 550 ||
         (currentWidth > 550 && lastSizeofWindow <= 550)
    ){

        const TitleTips = document.querySelector(".footer__title-tips__items");
        const DownItems = document.querySelector(".footer__down-items");

        const ClonedTitleTips = TitleTips.cloneNode(true);
        const ClonedDownItems = DownItems.cloneNode(true);

        TitleTips.replaceWith(ClonedDownItems);        
        DownItems.replaceWith(ClonedTitleTips);

        lastSizeofWindow = currentWidth;
        
    }    
}