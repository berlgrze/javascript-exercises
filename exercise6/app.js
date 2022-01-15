//Task description:
//Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

const numberOne = document.getElementById('numberOne');
const numberTwo = document.getElementById('numberTwo');
const mode = document.getElementById('mode');
const result = document.getElementById('result');
const MULTIPLY = 'MULTIPLY';
const DIVIDE = 'DIVIDE';

function calc(){
   
    let x = parseInt(numberOne.value);
    let y = parseInt(numberTwo.value);

    //TODO in future if empty input -> error

    function modeFunc(mode, x , y){
        if(mode == MULTIPLY){
            return x * y;
        }else if(mode == DIVIDE){
            return x / y;
        }
    }
    equationResult = modeFunc(mode.value.toUpperCase(), x, y);

   result.textContent = equationResult;
}

numberOne.addEventListener('keyup', calc);
numberTwo.addEventListener('keyup', calc);
mode.addEventListener('change', calc);