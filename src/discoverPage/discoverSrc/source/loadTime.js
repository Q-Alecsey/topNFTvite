

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const cards = document.querySelectorAll(".card__img-time");

cards.forEach((el) => {
    el.setAttribute("data-js-timer", randomInteger(10000, 40000));
})

setInterval(() =>{

    cards.forEach((el) => {
        
        let timer = +el.dataset.jsTimer;
        el.dataset.jsTimer = timer - 1;

        const hours = Math.floor(timer / 3600);
        timer = timer % 3600;

        const minutes = Math.floor(timer / 60);
        timer = timer % 60;

        el.textContent = `${hours < 10 ? "0" + hours : hours}h
                          ${minutes < 10 ? "0" + minutes : minutes}m
                          ${timer < 10 ? "0" + timer : timer}s `;
    });
}, 1000);