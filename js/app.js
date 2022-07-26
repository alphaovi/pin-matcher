function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
};

function generatePin() {
    const pin = getPin();
    document.getElementById("display-pin").value = pin;
};

document.getElementById("key-pad").addEventListener("click", function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById("typed-numbers");
    if(isNaN(number)){
        if(number == "C"){
            calcInput.value = "";
        }
    }
    else{
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

function verifyPin(){
    const pin = document.getElementById("display-pin").value;
    const verifyPin = document.getElementById("typed-numbers").value;
    const success = document.getElementById("notify-success");
    const error = document.getElementById("notify-error");

    if (pin == verifyPin){
        success.style.display = "block";
        error.style.display = "none"
    }
    else {
        success.style.display = "none";
        error.style.display = "block"
    }
}