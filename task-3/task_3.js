//get all questions wraper divs
const questionCards = document.querySelectorAll(".question-card");
//last child of counter
const counterEl = document.querySelector(".counter").lastElementChild
let counter = 0;


questionCards.forEach(el=>{
    const answers = el.querySelectorAll(".answer");


    let olreadyChoosen = false;
    answers.forEach(answer=>{
        answer.addEventListener("click",(e)=>{
            const currentQuestion = e.target.parentElement.querySelector(".question").textContent.charAt(0);
            const currentAnswer = e.target.textContent.charAt(0)
            //1
            if(currentQuestion==1&&currentAnswer=="B"&&!olreadyChoosen){
                counter+=1
                answer.style.backgroundColor = "green";
                counterEl.textContent = counter;
                olreadyChoosen = true;        
            }
            if(currentQuestion==2&&currentAnswer=="D"&&!olreadyChoosen){
                counter+=1
                answer.style.backgroundColor = "green";
                counterEl.textContent = counter;
                olreadyChoosen = true;
            }
            if(currentQuestion==3&&currentAnswer=="A"&&!olreadyChoosen){
                counter+=1
                answer.style.backgroundColor = "green";
                counterEl.textContent = counter;
                olreadyChoosen = true;
            }
            if(currentQuestion==4&&currentAnswer=="B"&&!olreadyChoosen){
                counter+=1
                answer.style.backgroundColor = "green";
                counterEl.textContent = counter;
                olreadyChoosen = true;
            }
            if(currentQuestion==5&&currentAnswer=="A"&&!olreadyChoosen){
                counter+=1
                answer.style.backgroundColor = "green";
                counterEl.textContent = counter;
                olreadyChoosen = true;
            }
            else if(!olreadyChoosen){
                answer.style.backgroundColor = "red";
                olreadyChoosen = true;   
            }            
        })

        
    })
});