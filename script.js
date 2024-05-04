let secretNumber = "";

function generateRandomNumber() {
    secretNumber = document.getElementById("inputNumberg").value;
    document.getElementById("inputNumberg").value = "";
}

function checkNumber() {
    let guess = document.getElementById("inputNumber").value;
    let result = document.getElementById("result");
    
    if (guess.length !== 4 || isNaN(guess)) {
        result.textContent = "Veuillez entrer un numéro à 4 chiffres valide.";
        return;
    }

    let v = 0;
    let t = 0;
    let feedback = "";
    
    for (let i = 0; i < 4; i++) {
        if (guess[i] == secretNumber[i]) {
            v++;
        } else if (secretNumber.includes(guess[i])) {
            t++;
        }
    }

    if (guess === secretNumber) {
        result.innerHTML = "Félicitations ! Vous avez deviné le numéro.";
    } else {
        result.innerHTML += guess + " - " + v + " vache(s) - " + t + " toreuuuu(s)<br>";
        if (t==0 && v==0){
            result.innerHTML += "yatik asba il zab bhim barche il 4 8altin !!!! <br>";
        }
    }
    document.getElementById("inputNumber").value = ""
}

function generateRandom4DigitNumber() {
    let num = "";
    for (let i = 0; i < 4; i++) {
        num += Math.floor(Math.random() * 10);
    }
    return num;
}