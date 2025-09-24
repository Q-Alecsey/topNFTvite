

const currentDate = new Date();

document.querySelector(".overlay-content__currentdate").textContent = 
currentDate.toDateString().split(" ").slice(1).join(" ");