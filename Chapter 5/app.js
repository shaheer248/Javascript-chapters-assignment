var a = 3
var b = 5
var c = 3 + 5
alert("The sum of 3 and 5 is " + c)

var d = 3 - 5
alert("The substraction of 3 and 5 is " + d)

var e = 3 * 5
alert("The multiplication of 3 and 5 is " + e)

var f = 3 / 5
alert("The division of 3 and 5 is " + f)

function printTable(){
    var num;
    num=Number(document.getElementById('txtNumber').value);
    for(var i=1; i<=10; i++){
        var pTag= document.getElementById('pPrint');
        pTag.innerHTML += (num*i) + "<br/>" 
    }
}

function convert(degree) {
    var x;
    if (degree == "C") {
      x = document.getElementById("c").value * 9 / 5 + 32;
      document.getElementById("f").value = Math.round(x);
    } else {
      x = (document.getElementById("f").value -32) * 5 / 9;
      document.getElementById("c").value = Math.round(x);
    }
  }

function percentage() {
    var obtained = document.getElementById("obtained").value;
    var total = document.getElementById("total").value;
    var percent = obtained*100/total;
    document.getElementById("tp").value = percent; 
}

function currency() {
    var saudi = 44.23 * 25
    var dollar = 165.96 * 10
    var pak = saudi + dollar
    document.getElementById("pakrupees").value = pak; 
}

function singleline() {
    var singlenumber = 5 * 10 / 2
    document.getElementById("arithmeticans").value = singlenumber; 
}

function agecalc() {
   var current = document.getElementById("current").value; 
   var birthage = document.getElementById("birthage").value; 
   var urage = document.getElementById("urage").value = current - birthage;
}

function snacks() {
    var age = document.getElementById("currentage").value; 
    var estimated = document.getElementById("estimated").value;
    var realage = estimated - age
    var snackamount = document.getElementById("amountperday").value;
    var average = realage + snackamount / 2
    var eatdaily = document.getElementById("eatdaily").value = "You will eat " + snackamount * 360 * realage / average + " average amount of chips in the rest of your life until the old age of" + estimated;  
}