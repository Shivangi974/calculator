// alert(" MY FIRST SIMPLE PROJECT !!! ")

const DisplayData= document.getElementById("Display");

// create function using function keyword 
function clickToEnter(input){
    Display.value += input;
}

function calculateResult(){
    const Result= eval(DisplayData.value);
    Display.value=Result;
}
// we create variable using var,let,const we mostly use let or const 
// we can change let variable but not const 
function clearDisplay() {
    Display.value=" ";
}