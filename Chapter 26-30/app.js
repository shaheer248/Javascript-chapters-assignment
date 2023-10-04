
function calcpinteger() {
   var input = document.getElementById("integer").value;
   document.getElementById("pnumber").value = input;
   document.getElementById("pfloor").value = Math.floor(input);
   document.getElementById("pceil").value = Math.ceil(input);
   document.getElementById("proundoff").value = Math.round(input)
}

function calcninteger() {
    var input = document.getElementById("ninteger").value;
    document.getElementById("nnumber").value = input;
    document.getElementById("nfloor").value = Math.floor(input);
    document.getElementById("nceil").value = Math.ceil(input);
    document.getElementById("nroundoff").value = Math.round(input)
 }

function absoluteinteger() {
   var input = document.getElementById("ainteger").value
   document.getElementById("anumber").value = Math.abs(input);
}

function randominteger() {
    var dice = Math.floor( Math.random() * 6 ) +1
    document.getElementById("rnumber").value = dice;
    alert("You rolled a " + dice)
}

function htinteger() {
    var ht = Math.floor( Math.random() * 2 ) +1
    if(ht == 2){
        alert("Congratulations! You got Heads");
        document.getElementById("httxt").innerHTML = "Congratulations! You got Heads"
    }else if(ht == 1){
        alert("Congratulations! You got Tails");
        document.getElementById("httxt").innerHTML = "Congratulations! You got Tails"
    }else{
        alert("Error!")
    }
}

function randominteger() {
    var random = Math.floor( Math.random() * 100 ) +1
    alert("You have gotten " + random)
    document.getElementById("randomtxt").innerHTML = "You have gotten " + random
}

function weight() {
   var input = document.getElementById("weight").value
   alert("Your weight in kilograms is " + input + "KGs")
   document.getElementById("weighttxt").innerHTML = "Your weight in kilograms is " + input + "KGs"
}

function secret() {
    var number = 7
    var input = document.getElementById("secret").value
    if(input == 7 ){
        alert("Congratulations! You have guessed the right number.")
        document.getElementById("secrettxt").innerHTML = "Congratulations! You have guessed the right number."
    }else{
        alert("Try Again. HINT: The secret number is lucky.")
        document.getElementById("secrettxt").innerHTML = "Try Again."
    }
}