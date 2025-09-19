
// titleHeight -> Высота, на которую должен увеличиться pattern , чтобы далее
// отобразить questions__pool-response__title

// Данная высота записывается в атрибут pattern при загрузке 
// страницы в Js коде выше (1-9 стр)

setTimeout(() => {
    document.querySelectorAll(".questions__pool-response__title").forEach((item) =>{

        const ResponseTitle = item.parentElement;
        
        ResponseTitle.setAttribute("data-js-titleHeight", `${item.clientHeight}`)

        item.style.display = "none";
    });

    document.querySelectorAll(".questions__pool-pattern").forEach(item => {

        const paddingBottomPattern = parseInt(getComputedStyle(item).paddingBottom);

        item.style.height = `${item.firstElementChild.clientHeight + paddingBottomPattern}px`;
    }) // Выставляем высоту , чтобы transition срабатывал правильно
    
}, 900);

// Ограничение по нажатию на кнопку

export function answersToQuestions(){

    document.addEventListener("click", (e) =>{     
        
        if (e.target.classList.contains("questions__pool-pattern__button")){

            const Button = e.target; // Кнопка по которой кликнули\
            Button.disabled = true;

            const pattern = Button.closest(".questions__pool-pattern");   
            const patternHeight = pattern.clientHeight; // Высота блока , содержащего данный вопрос

            const QuestionTitleHeight = pattern.firstElementChild.clientHeight; // высота Заголовка Вопроса

            const titleResponse = pattern.lastElementChild; // Элемент( который скрывается) ответа
            const titleResponseHeight = +pattern.getAttribute("data-js-titleHeight"); // Высота Заголовка ответа

            console.log(`titleResponseHeight:${titleResponseHeight}\n
                         patternHeight:${patternHeight}\n
                         QuestionTitleHeight:${QuestionTitleHeight}`);
                                    
            // 15 -> paddingBottom
            if (QuestionTitleHeight + 15 >= patternHeight){

                pattern.style.height = `${patternHeight + titleResponseHeight + 1}px`;

                titleResponse.style.display = "block";

                setTimeout(() =>{
                    titleResponse.classList.add("questions__pool-pattern__title--visibled");
                    Button.disabled = false;
                }, 500);
            }

            else{
                titleResponse.classList.remove("questions__pool-pattern__title--visibled");

                setTimeout(() =>{

                    titleResponse.style.display = "none";

                    pattern.style.height = `${patternHeight - titleResponseHeight - 1}px`;
                    Button.disabled = false;
                }, 500);
            }
        }
        
    })
}

// изменение текста 3 вопроса , т.к. при уменьшении окна , текст залезает на кнопку
export function changeTextOfDiff(){ 
    const currentWidth = document.documentElement.clientWidth;   
    const thirdTitle = document.querySelector("[data-js-specialTitle]");

    if (currentWidth < 865){

        thirdTitle.textContent = "Diff between an NFT and cryptocurrency?";
    }

    else{
        thirdTitle.textContent = "What is the difference between an NFT and cryptocurrency?";
    }

    const pattern = thirdTitle.closest(".questions__pool-pattern");
    const paddingBottomPattern = parseInt(getComputedStyle(pattern).paddingBottom);

    pattern.style.height = `${thirdTitle.clientHeight + paddingBottomPattern}px`;    
}