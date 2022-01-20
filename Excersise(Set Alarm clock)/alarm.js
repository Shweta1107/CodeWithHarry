const alarmSubmit = document.getElementById("alarmSubmit");

//Add eventListner to the submit button
alarmSubmit.addEventListener("click",setAlarm);

var audio = new Audio("boo.mp3")

//function to play the alarm
function ringBell(){
    audio.play();
}

//This function will run wheneveralarm is set from UI
function setAlarm(e){
    e.preventDefault();
    const alarm = document.getElementById("alarm")
    alarmDate = new Date(alarm.value)
    now = new Date(); //it means current time

    let timeToAlarm = alarmDate - now;
    if(timeToAlarm >= 0){
        setTimeout(()=>{
       
         console.log("Ringing bell")
         ringBell();
    },timeToAlarm)
    }
}