let startBtn = document.getElementById('start'); 
let stopBtn = document.getElementById('stop'); 
let resetBtn = document.getElementById('reset'); 
  
let second = 60; 
let count = 0; 
  
startBtn.addEventListener('click', function () { 
    timer = true; 
    stopWatch(); 
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
