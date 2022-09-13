console.log("hi");

let randomNumber = Math.floor(Math.random() * 10 + 1);
let attemptCount = 0;

console.log(" random number is: " + randomNumber);

//div1html= document.getElementById("div1").innerHTML; for debugging purpose

//randomNumber=6; -for debugging purpose

function userGuess(guess) {
    console.log("user guessed" + guess);

    attemptCount++;

    if (guess == randomNumber) {
        alert(" congrats. You guessed correctly in " + attemptCount + " attempts");

        console.log("b" + guess);

        const element = document.getElementById("b" + guess);
        element.style.backgroundColor = `green`;

        console.log(element);
        return;
    }
    else if (guess < randomNumber) {
        console.log("b" + guess);

        const element = document.getElementById("b" + guess);
        element.style.backgroundColor = `yellow`;

        console.log(element);

    }
    else if (guess > randomNumber) {
        console.log("b" + guess);

        const element = document.getElementById("b" + guess);
        element.style.backgroundColor = `red`;

        console.log(element);

    }
    if (attemptCount == 6) {
        alert(" you completed the 6 turns");
    }


}


