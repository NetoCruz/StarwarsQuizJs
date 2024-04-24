// import data from "./data";
data=[
    {
        id:1,
        quiz:"¿Quién fue el maestro de Obi-Wan?",
        respuestas:[
             {
                id:'op1',
            content:"Yoda",
            respond:false
        },
        {
            id:'op2',
            content:"Qui-gon-jin",
            respond:true
        },
        {
            id:'op3',
            content:"Dooku",
            respond:false
        },
        ]
        
    },
    {
        id:2,
        quiz:"¿Quién ejecuto la orden 66?",
        respuestas:[
             {
                id:'op1',
            content:"Yoda",
            respond:false
        },
        {
            id:'op2',
            content:"Palpatine",
            respond:true
        },
        {
            id:'op3',
            content:"Darth Maul",
            respond:false
        },
        ]
        
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

data[numQuestion].respuestas.map(item=>{
    const opt1 = document.createElement("button");
    opt1.setAttribute("id", item.id)
    opt1.innerHTML =item.content;
    document.body.appendChild(opt1)
    isCorrect(item.respond,item.id)
    opt1.setAttribute("tipo", item.respond)

    let option3 = document.getElementById(item.id)
    option3.addEventListener('click',function(){
     isCorrect(item.respond)
    eraseQuestion()
    myquiz(1)
})  
})

function isCorrect(res,pos){
   //console.log(pos)
   let option3 = document.getElementById(pos)
   option3.addEventListener('click',function(){
        if(res==true){
          document.getElementById('scoreNum').innerHTML = "1";  
        } 
       
       eraseQuestion()
       myquiz(1)
   })  
    
}


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
