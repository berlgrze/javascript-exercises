//Task description:
//Write a JavaScript program to get the current date.

//handlers
const currentDate = document.getElementById('currentDate');
const getCurrentDateBtn = document.getElementById('getCurrentDateBtn');

//getdate function with +1 on month + padstart method
function getCurrentDate(){
const date = new Date();
const month = String(date.getMonth()+1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');
const year = date.getFullYear();
const fullDate = `${month}/${day}/${year}`;
currentDate.textContent = fullDate; 
}

//click eventlistener
getCurrentDateBtn.addEventListener('click', getCurrentDate);