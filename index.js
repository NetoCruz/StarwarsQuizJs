// import data from "./data";
data=[
    {
        id:1,
        quiz:"¿Quién fue el maestro de Obi-Wan?",
        option1:"Yoda",
        option2:"Qui-gon-jin",
        option3:"Dooku",
        correct:2
    },
    {
        id:2,
        quiz:"¿Quién ejecuto la orden 66?",
        option1:"Yoda",
        option2:"Palpatine",
        option3:"Darth Maul",
        correct:2
    }
]
let startBtn = document.getElementById('start'); 
let stopBtn = document.getElementById('stop'); 
let resetBtn = document.getElementById('reset'); 
  
let second = 60; 
let count = 0; 
  
startBtn.addEventListener('click', function () { 
    timer = true; 
    stopWatch(); 
   myquiz(0)
}); 
  
stopBtn.addEventListener('click', function () { 
    timer = false; 
}); 
  
resetBtn.addEventListener('click', function () { 
    timer = false;  
    second = 60; 
    count = 0; 
    document.getElementById('sec').innerHTML = "60"; 
    document.getElementById('count').innerHTML = "00"; 
}); 

function myquiz(nextq){
     let numQuestion=nextq;
        const question = document.createElement("h4");
        question.setAttribute("id", "titleQ")
question.innerHTML =data[numQuestion].quiz;
document.body.appendChild(question)

const opt1 = document.createElement("button");
opt1.setAttribute("id", "op1")
opt1.innerHTML =data[numQuestion].option1;
document.body.appendChild(opt1)

const opt2 = document.createElement("button");
opt2.setAttribute("id","op2")
opt2.innerHTML =data[numQuestion].option2;
document.body.appendChild(opt2)

const opt3 = document.createElement("button");
opt3.setAttribute("id","op3")
opt3.innerHTML =data[numQuestion].option3;
document.body.appendChild(opt3)
        // document.getElementById('question').innerHTML = item.quiz;
        // document.getElementById('op1').innerHTML = item.option1;
        

    let option3 = document.getElementById('op3')
option3.addEventListener('click',function(){
    document.getElementById('scoreNum').innerHTML = "1";
    eraseQuestion()
    myquiz(1)
})  
   
}
function eraseQuestion(){
    const question = document.getElementById("titleQ");
    question.remove()
    const opt1 = document.getElementById("op1");
    opt1.remove()

const opt2 = document.getElementById("op2");
    opt2.remove()

const opt3 = document.getElementById("op3");
  opt3.remove()
}
  
  
  
function stopWatch() { 
    if (timer) { 
        count++; 
  
        if (count == 100) { 
            second--; 
            count = 0; 
        } 
      
        let secString = second; 
        let countString = count; 
  
       
  
        if (second < 10) { 
            secString = "0" + secString; 
        } 
  
        if (count < 10) { 
            countString = "0" + countString; 
        } 
  
        
        document.getElementById('sec').innerHTML = secString; 
        document.getElementById('count').innerHTML = countString; 
        setTimeout(stopWatch, 10); 
    } 
}
