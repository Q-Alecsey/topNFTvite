

let lastSizeofWindow = 1000;

//Изменение footer'а 

window.addEventListener("resize", () =>{
    const currentWidth = document.documentElement.clientWidth;

    if ( (currentWidth <= 580 && lastSizeofWindow > 580) ||
            (currentWidth > 580 && lastSizeofWindow <= 580)
    ){

        const TitleTips = document.querySelector(".footer__title-tips__items");
        const DownItems = document.querySelector(".footer__down-items");

        const ClonedTitleTips = TitleTips.cloneNode(true);
        const ClonedDownItems = DownItems.cloneNode(true);

        TitleTips.replaceWith(ClonedDownItems);        
        DownItems.replaceWith(ClonedTitleTips);

        lastSizeofWindow = currentWidth;
        
    }    
})

