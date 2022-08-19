function pinHandaler() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return pinHandaler();

    }
};

function generatePin() {
    const random = Math.round(Math.random() * 10000)
    return random;

};
document.getElementById('btn-generate-pin').addEventListener('click', function () {
    const pin = pinHandaler();
    const displayPinElement = document.getElementById('display-pin');
    displayPinElement.value = pin;

});

document.getElementById('calculator').addEventListener('click', function (event) {
    const numbers = event.target.innerText;
    const previousInputFiled = document.getElementById('typed-input');
    const previousInputNumbers = previousInputFiled.value;

    if (isNaN(numbers)) {
        if (numbers == 'C') {
            previousInputFiled.value = '';
        }
        else if (numbers == '<') {
            const digit = previousInputNumbers.split('');
            digit.pop();
            const remainingDigit = digit.join('');
            previousInputFiled.value = remainingDigit;

        }
    }
    else {
        const showNumber = previousInputNumbers + numbers;
        previousInputFiled.value = showNumber;

    }

})

document.getElementById('btn-submit').addEventListener('click', function () {
    const getPinTypeElement = document.getElementById('typed-input');
    const number = getPinTypeElement.value;

    const genetatePin = document.getElementById('display-pin');
    const pin = genetatePin.value;
    const unMatchMassage = document.getElementById('um-message');
    const matchMassage = document.getElementById('m-message');
    if (number == pin) {

        matchMassage.style.display = 'block';
        unMatchMassage.style.display = 'none';
    }
    else {

        unMatchMassage.style.display = 'block';
        matchMassage.style.display = 'none';
    }
});