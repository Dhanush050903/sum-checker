let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let userInput = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");
let randomnumber1 = Math.ceil(Math.random() * 100);
let randomnumber2 = Math.ceil(Math.random() * 100);
firstNumber.textContent = randomnumber1;
secondNumber.textContent = randomnumber2;

function getrandomnumber() {
    randomnumber1 = Math.ceil(Math.random() * 100);
    randomnumber2 = Math.ceil(Math.random() * 100);
    firstNumber.textContent = randomnumber1;
    secondNumber.textContent = randomnumber2;
}

function check() {
    let rnum1 = parseInt(firstNumber.textContent);
    let rnum2 = parseInt(secondNumber.textContent);
    let sum = rnum1 + rnum2;
    let userInput2 = parseInt(userInput.value);
    console.log(rnum1);
    console.log(rnum2);
    console.log(sum);
    console.log(userInput2);
    console.log(sum === userInput2);
    if (sum === userInput2) {
        gameResult.textContent = "Congratulations! You got it right.";
        gameResult.style.backgroundColor = "#028a0f";
    } else {
        gameResult.textContent = "Please Try Again!";
    }
    gameResult.style.backgroundColor = "#1e217c";

}

function restart() {
    gameResult.textContent = "";
    randomnumber1 = Math.ceil(Math.random() * 100);
    randomnumber2 = Math.ceil(Math.random() * 100);
    firstNumber.textContent = randomnumber1;
    secondNumber.textContent = randomnumber2;

}