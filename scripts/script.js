let stopButton = document.getElementById("btn-stop");
let studyText = document.getElementById("study-action");
let clockText = document.getElementById("clock")
let bigBox = document.getElementById("big-box");
let logo = document.getElementById("logo");
let startButton = document.getElementById("btn-start");

let timeSecond = 3600;


startButton.onclick = function(){
    const countDown  = setInterval(()=>{
        timeSecond--;
        displayTime(timeSecond);
        if(timeSecond <= 0 || timeSecond < 1){
            clearInterval(countDown);
        }
    },1000);
    
    function displayTime(second){
        const min = Math.floor (second/ 60);
        const sec = Math.floor(second % 60);
        clockText.innerHTML = `${min}:${sec}`;
    
    }
}





let bodyColor = false;

stopButton.onclick = function(){
    if(bodyColor === false){
        document.body.style.backgroundColor = "#1C2B2D";
        
        studyText.innerHTML = "BREAK!!!";
        studyText.style.borderColor = "#99A8B2"
        studyText.style.color = "#99A8B2"

        clockText.innerHTML ="10:00";
        clockText.style.borderColor = "#99A8B2";
        clockText.style.color ="#99A8B2";

        bigBox.style.backgroundColor = "#1F6F8B";

        logo.src = "images/logo-2.png";

        startButton.style.backgroundColor = "#99A8B2";
        startButton.style.borderColor = "#99A8B2";

        stopButton.style.backgroundColor = "#C84B31";
        stopButton.style.borderColor = "#C84B31";



        bodyColor = true;
    }else{
        document.body.style.backgroundColor = "";
        
        studyText.innerHTML = "STUDY!!!"
        studyText.style.borderColor = ""
        studyText.style.color = ""

        clockText.innerHTML ="59:00";
        clockText.style.borderColor = "";
        clockText.style.color ="";

        bigBox.style.backgroundColor = "";
        logo.src = "images/logo.png";

        startButton.style.backgroundColor = "";
        startButton.style.borderColor = "";

        stopButton.style.backgroundColor = "";
        stopButton.style.borderColor = "";
        bodyColor = false;
    }
 

    
}
