var calculator = document.querySelector("#calcu");

function display(val) {
    var result = document.querySelector("#result");
    result.value += val;
}

function myFunction(event) {
    var result = document.querySelector("#result");
    if (event.key == '0' || event.key == '1' 
    || event.key == '2' || event.key == '3'
    || event.key == '4' || event.key == '5' 
    || event.key == '6' || event.key == '7'
    || event.key == '8' || event.key == '9' 
    || event.key == '+' || event.key == '-'
    || event.key == '*' || event.key == '/')
    {
        result.value += event.key;
    }
}

calculator.onkeyup = function (event) {
    var result = document.querySelector("#result");
    if (event.keyCode === 13) {
        console.log("Enter");
        let x = result.value
        console.log(x);
        solve();
    }
}

function solve() {
    var result = document.querySelector("#result");
    let x = result.value
    let y = math.evaluate(x)
    result.value = y
}

function clr() {
    var result = document.querySelector("#result");
    result.value = ""
}