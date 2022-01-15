//Task description:
//Write a JavaScript program to display the current day and time in the following format. 
//Sample Output : Today is : Tuesday. Current time is 10 PM : 30 : 38

function getDate(){
    //declarating variables
    let date = new Date();
    let day = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    //replacing number to dayname
    if (day == 1){
        day = 'Monday';
    }else if(day == 2){
        day = 'Tuesday';
    }else if(day == 3){
        day = 'Wednesday';
    }else if(day == 4){
        day = 'Thursday';
    }else if(day == 5){
        day = 'Friday';
    }else if(day == 6){
        day = 'Saturday';
    }else if(day == 7){
        day = 'Sunday';
    }

    //hours AM or PM
    if (hours < 12){
        hours = `${hours} AM`;
    }else if (hours >= 12){
            hours = `${hours} PM`;
    }

    //adding 0 before if number is smaller than 10
    if (hours < 10){
        hours = `0${hours}`;
    }
    if (minutes < 10){
        minutes = `0${minutes}`;
    }
    if (seconds < 10){
        seconds = `0${seconds}`;
    }

    //console return
    console.log(`Today is: ${day}. Current time is ${hours} : ${minutes} : ${seconds}`);
}

//window onload because document.onload with DOM is not nessesary (i'm dont using html elements handlers)
window.onload = setInterval(getDate, 1000);