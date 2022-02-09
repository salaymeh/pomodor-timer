// buttons
let stopButton = document.getElementById("btn-stop");
let studyText = document.getElementById("study-action");
let clockText = document.getElementById("clock")
let bigBox = document.getElementById("big-box");
let settingButton = document.getElementById("btn-settings");
let startButton = document.getElementById("btn-start");
let saveButton = document.getElementById("save-btn");
//constants 


let studyTime;
let breakTime;
let time; 
let changeColor = false;
let startBtn = false;
let clock;




startButton.onclick = function(){
 
    if(startBtn === false){
        initializeClock();
        
    }      

};



stopButton.onclick = function(){

        stopButton.disabled = true;
        clearInterval(clock)
        startButton.disabled = false;


}

settingButton.onclick = function (){
    
}
saveButton.onclick = function (){
    let clockString='';
    let userStudyTime = document.getElementById("user-study-time").value;
    let userBreakTime = document.getElementById("user-break-time").value;
    
    console.log(userStudyTime);
    if (userStudyTime === "" || userBreakTime=== ""){
        alert("cannot be empty");  
        
    }
    if (userStudyTime != undefined && userBreakTime!= undefined){
        console.log("here");
        studyTime = parseInt(userStudyTime);
        breakTime = parseInt(userBreakTime);
       
    }


    if (studyTime.toString().length ===1 ){
        clockString="0"+studyTime+":00";
        clockText.innerHTML = clockString;
    }else{
        clockText.innerHTML = studyTime+":00";
    }
    if (changeColor ===true){
        clockText.innerHTML = breakTime+":00";
        
    }
    

}




function breakColor(){

    document.body.style.backgroundColor = "#1C2B2D";
        
    studyText.innerHTML = "BREAK!!!";
    studyText.style.borderColor = "#99A8B2"
    studyText.style.color = "#99A8B2"

    clockText.innerHTML =breakTime+":00";
    clockText.style.borderColor = "#99A8B2";
    clockText.style.color ="#99A8B2";

    bigBox.style.backgroundColor = "#1F6F8B";


    startButton.style.backgroundColor = "#99A8B2";
    startButton.style.borderColor = "#99A8B2";

    stopButton.style.backgroundColor = "#C84B31";
    stopButton.style.borderColor = "#C84B31";
    settingButton.style.backgroundColor = "#99A8B2";
    settingButton.style.borderColor= "#99A8B2";
    
}





function studyColor(){
    document.body.style.backgroundColor = "";
        
    studyText.innerHTML = "STUDY!!!"
    studyText.style.borderColor = ""
    studyText.style.color = ""

    clockText.innerHTML =studyTime+":00";
    clockText.style.borderColor = "";
    clockText.style.color ="";

    bigBox.style.backgroundColor = "";

    startButton.style.backgroundColor = "";
    startButton.style.borderColor = "";

    stopButton.style.backgroundColor = "";
    stopButton.style.borderColor = "";
    settingButton.style.backgroundColor = "";
    settingButton.style.borderColor= "";
}


function initializeClock() {
    
    clock = setInterval(getTimeRemaining,1000);
    startButton.disabled = true;
    settingButton.disabled = true;
    // this checks which time to use
    //grabs the default value;
    let userStudyTime = document.getElementById("user-study-time").value;
    let userBreakTime = document.getElementById("user-break-time").value;
    studyTime = parseInt(userStudyTime);
    breakTime = parseInt(userBreakTime);
    if (changeColor===false && stopButton.disabled===false){
        
        time = getSeconds(studyTime);
        console.log(time);
    }
    if(changeColor===true && stopButton.disabled===false){
        time = getSeconds(breakTime);
    }

    if (changeColor === false && stopButton.disabled===true){
        console.log(time);
        stopButton.disabled = false;
    }
    if (changeColor === true && stopButton.disabled===true){
        stopButton.disabled = false;
    }

    // counter 
    function getTimeRemaining(){
        

        time = time -1;

        clockText.innerHTML = getMin(time);
        console.log("initClock: "+time);
        if (time <= 0 && changeColor === false){
            clearInterval(clock);
            breakColor();
            time=breakTime;
            changeColor = true
            startButton.disabled = false;
            settingButton.disabled = false;
        }
        if(time<=0 && changeColor === true){
            clearInterval(clock);
            studyColor();
            time=studyTime;
            changeColor = false
            startButton.disabled = false;
            settingButton.disabled = false;
        }
        
    }

}
function getSeconds(time){
    let sec = time * 60;
    return sec;
}
function getMin(time){
    let min = Math.floor(time/60);
    let sec = (time%60).toFixed(0);
    let clockString;

    if (min.toString().length ===1 && sec.toString().length ===1){
        clockString="0"+min+":0"+sec;
    }
    else if (min.toString().length ===1 && sec.toString().length !=1){
        clockString="0"+min+":"+sec;
    }

    else if (sec.toString().length ===1){
        clockString = min + ":0"+sec;
    }else{
       clockString = min + ":"+sec;
    }
    
    return clockString;
}



