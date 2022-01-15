//Task description:
//Write a JavaScript program to print the contents of the current window.


//btn handler
const printBtn = document.getElementById('printBtn');

//printing window
function printWindow(){
    window.print();
}

//click eventlistener
printBtn.addEventListener('click', printWindow);