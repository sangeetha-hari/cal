function display1() {
    let number = document.querySelector('#num1').value;
    number=parseInt(number);
    
    console.log(parseInt(number) );
    // let reg = new RegExp("[0-9]","d");
    // console.log(reg.test(number));
   console.log( Number.isSafeInteger(number))
}
function display2() {
    let number = document.querySelector('#num2').value;
    console.log(number);
}

function add(){
    let number1 = parseFloat(document.querySelector('#num1').value);
    console.log("Inside the add function");
    let number2 = parseFloat (document.querySelector('#num2').value);
    let res= document.querySelector('#result');
    res.innerText=`The Add result is ${number1+number2}`
}

function sub(){
    let number1 = parseFloat(document.querySelector('#num1').value);
    console.log("Inside the add function");
    let number2 = parseFloat (document.querySelector('#num2').value);
    let res= document.querySelector('#result');
    res.innerText=`The substract result is ${number1-number2}`
}
function mul(){
    let number1 = parseFloat(document.querySelector('#num1').value);
    console.log("Inside the add function");
    let number2 = parseFloat (document.querySelector('#num2').value);
    let res= document.querySelector('#result');
    res.innerText=`The mul result is ${number1*number2}`
}

function div(){
    let number1 = parseFloat(document.querySelector('#num1').value);
    console.log("Inside the add function");
    let number2 = parseFloat (document.querySelector('#num2').value);
    let res= document.querySelector('#result');
    res.innerText=`The substract result is ${number1/number2}`
}
function mod(){
    let number1 = parseFloat(document.querySelector('#num1').value);
    console.log("Inside the add function");
    let number2 = parseFloat (document.querySelector('#num2').value);
    let res= document.querySelector('#result');
    res.innerText=`The substract result is ${number1%number2}`
}