

async function loadPage(){

    const data = (await loadData())[sessionStorage.getItem("currentNFT")];
    
    const img = document.querySelector(".project__img");

    img.src = data.link;
    img.srcset = data.link2x;

    //

    const title = document.querySelector(".project__info-title");

    title.textContent = `Project ${sessionStorage.currentNFT}`;

    //

    const creater = document.querySelector(".creater__img");    

    creater.src = data.creater.avatarLink;
    creater.srcset = data.creater.avatarLink2x;

    const createrNick = document.querySelector(".creater__info-nick");

    createrNick.textContent = data.creater.nick;

    //

    const owner = document.querySelector(".owner__img");    

    owner.src = data.owner.avatarLink;
    owner.srcset = data.owner.avatarLink2x;

    const ownerNick = document.querySelector(".owner__info-nick");

    ownerNick.textContent = data.owner.nick;

    //

    const bid = document.querySelector(".bid__current");

    bid.textContent = data.bid;    

    //

    const time = document.querySelector(".time__end");

    time.textContent = data.endIn;
}
    

function loadData(){
    return fetch("/public/info/data.json")
    .then((response) => {
        
        return response.json();
    })
    .then((response) => {
        
        return response;
    })
    .catch((error) => {
        
        throw new Error(error);
    });
    
}


loadPage();
