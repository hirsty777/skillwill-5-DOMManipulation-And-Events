//correct answers counter (evry time answer is correct we incrise it by 1)
let counter = 0;
//correct answers array.answers are in sequence(1question,2question,3...)
const correctAnswesrArray =["B","D","A","B","A"];
//get all questions wraper divs
const questionCards = document.querySelectorAll(".question-card");
//last child of counter class
const counterEl = document.querySelector(".counter").lastElementChild;

//for evry question card
questionCards.forEach(el=>{
    //get evry answers element
    const answers = el.querySelectorAll(".answer");
    let olreadyChoosen = false;//this is used to prevent user for answeren question more then 1 time

    //add eventlistener for evry answer element and check wich one was clicked
    answers.forEach(answer=>{
        answer.addEventListener("click",(e)=>{
            //get question number
            const currentQuestion = e.target.parentElement.querySelector(".question").textContent.charAt(0);
            //get answer first letter (since it always A,B,C or D)
            const currentAnswer = e.target.textContent.charAt(0);
            
            if(answerStatus(currentQuestion,currentAnswer)&&!olreadyChoosen){
                counter+=1
                answer.style.backgroundColor = "green";
                counterEl.textContent = counter;
                olreadyChoosen = true;
            }else if(!olreadyChoosen){
                answer.style.backgroundColor = "red";
                olreadyChoosen = true; 
            }            
        });
    })
});

//currQuestn declares wich array must be choosen and we compare it to answer thet was choosen
function answerStatus(currQuestn, currAnswer){
    if(currAnswer==correctAnswesrArray[currQuestn-1]){ return true}
    else{ return false }
}