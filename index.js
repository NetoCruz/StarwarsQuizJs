// import data from "./data";
data=[
    {
        id:1,
        quiz:"¿Quién fue el maestro de Obi-Wan?",
        option1:"Yoda",
        option2:"Qui-gon-jin",
        option3:"Dooku",
    },
    {
        id:2,
        quiz:"¿Quién ejecuto la orden 66?",
        option1:"Yoda",
        option2:"Palpatine",
        option3:"Darth Maul",
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
   myquiz()
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

function myquiz(){
     
        const question = document.createElement("h4");
question.innerHTML =data[0].quiz;
document.body.appendChild(question)

const opt1 = document.createElement("button");
opt1.setAttribute("id", "op1")
opt1.innerHTML =data[0].option1;
document.body.appendChild(opt1)

const opt2 = document.createElement("button");
opt2.setAttribute("id","op2")
opt2.innerHTML =data[0].option2;
document.body.appendChild(opt2)

const opt3 = document.createElement("button");
opt3.setAttribute("id","op3")
opt3.innerHTML =data[0].option3;
document.body.appendChild(opt3)
        // document.getElementById('question').innerHTML = item.quiz;
        // document.getElementById('op1').innerHTML = item.option1;
        // document.getElementById('op2').innerHTML = item.option2;
        // document.getElementById('op3').innerHTML = item.option3;

        
   
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
