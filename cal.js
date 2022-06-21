function display1() {
    let number = document.querySelector('#num1').value;
    console.log(number);
    let reg = new RegExp("[0-9]","d");
    console.log(reg.test(number));





}
function display2() {
    let number = document.querySelector('#num2').value;
    console.log(number);
}
