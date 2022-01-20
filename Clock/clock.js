

function updateTime(){

    let currentTime = new Date();

    let hr = currentTime.getHours();
    let min = currentTime.getMinutes();
    let sec = currentTime.getSeconds();

    // console.log(`${hr}:${min}:${sec}`)

    //pad 0 if min or sec is less than 10
    if(min<10){
        min+='0';
    }
    else{
        min+="";
    }

    if(sec<10){
        sec+='0';
    }
    else{
        sec+="";
    }

    if(hr>12){
       hr = hr-12;
    }
    else{
        hr = hr;
    }
    //****************AM / PM********************
    timeOfDay = (hr<12) ? 'AM':'PM';

    let currentTimeStr = `${hr}: ${min}: ${sec} ${timeOfDay}`;

    document.getElementById("clock").innerHTML = currentTimeStr;
}

//1st way of setInterval
setInterval(() => {
    updateTime()
}, 1000);


//12nd way of setInterval
// setInterval(updateTime,1000);