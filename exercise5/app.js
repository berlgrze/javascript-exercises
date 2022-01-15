//Task description:
//Write a JavaScript program to rotate the string in right direction by periodically removing one letter from the end of the string and attaching it to the front.

const someInput = document.getElementById('someInput');
const someString = document.getElementById('someString');

//change and then animate it
function changeString() {
    someString.textContent = someInput.value;
    animateString(someString);
}


//animate function
function animateString(someInput) {

    //no children nodes
    const textNode = someInput.childNodes[0];
    let text = textNode.data;

    //interval
    setInterval(() => {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 500);
}