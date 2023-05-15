const timerE1=document.getElementById("timer");
const startE1 = document.getElementById("start");
const stopE1 = document.getElementById("stop");
const resetE1 = document.getElementById("reset");

let startTime=0;
let elapsedTime=0;
let timeInterval;

function startTimer(){
    console.log("start");
    startTimer = Date.now() - elapsedTime;
    timeInterval = setInterval(() =>{
        elapsedTime = Date.now() - startTimer;
        timerE1.textContent=formatTimer(elapsedTime);
    
    },10)
    startE1.disabled=true;
    stopE1.disabled=false;
}
function formatTimer(elapsedTime)
{
    const milliSecond = Math.floor((elapsedTime % 1000) /10);
    const second = Math.floor((elapsedTime % (1000*60)) /1000);
    const minute = Math.floor(elapsedTime % (1000 *60*60) /(1000*60));
    const hour = Math.floor(elapsedTime /(1000*60*60));
       return (
        (hour ? (hour > 9 ? hour : "0" + hour) : "00") + ":"+
        (minute ? (minute > 9 ? minute : "0" + minute) : "00") + ":"+
        (second ? (second > 9 ? second : "0" + second) : "00") + "."+
         (milliSecond > 9 ? milliSecond : "0" + milliSecond)
    )
    
}
function stopTimer(){
    clearInterval(timeInterval);
    startE1.disabled=false;
    stopE1.disabled=true;
}
function resetTimer(){
    clearInterval(timeInterval);
    elapsedTime=0;
    timerE1.textContent="00:00:00";
    startE1.disabled=false;
    stopE1.disabled=true;
}
startE1.addEventListener("click",startTimer);
stopE1.addEventListener("click",stopTimer);
resetE1.addEventListener("click",resetTimer);