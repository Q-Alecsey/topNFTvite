
// transition is made by pressing button (class "weekly-group__button")

document.addEventListener("click", (e) =>{

    const {target} = e;    

    if (target.classList.contains("weekly-group__button") ||
        target.classList.contains("market-group__button") ||
        target.classList.contains("card__content-button")) {

        const closestTitle = target.parentElement.parentElement.querySelector("h2").textContent;
        
        sessionStorage.setItem("currentNFT", closestTitle);        

        window.location.href = "/src/Product/index.html";
    }
})