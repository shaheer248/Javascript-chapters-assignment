
function cityname() {
var city = prompt("Enter city name :");
if (city=='Karachi'){
    alert("Welcome to city of lights")
}else{
    alert("Your city is not city of lights")
}
}

function gender() {
var gender = prompt("Male/Female ? ");
if (gender=='Male', 'male', 'MALE', 'mALE'){
    alert(" Good Morning Sir");
}
else{
alert("Good Morning Ma'am")
}
}

function traffic() {
var signal_color = prompt("Enter signal color : ");
if (signal_color == 'Red', 'red', 'rED', 'RED'){
    alert("Must Stop");
}else if (signal_color == 'Yellow', 'yellow', 'yELLOW', 'YELLOW'){
    alert("Ready to move");
}
else{
    alert("Move now");
}
}

function fuel() {
    var fuel = prompt("Enter remaining fuel in liters : ");
    if (fuel == 0.25){
        alert("Please refill the fuel in your car");
    }else{
        alert("Your fuel is fine")
    }
}

function variable() {
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
OUTPUT:  displayed

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
OUTPUT:  "Not Displayed"

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
OUTPUT: "Condition 2 and 4 displayed"

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
OUTPUT:  displayed

if (true){
    alert("True");
}
if (false){
    alert("False");
}
OUTPUT:  true

if("car" < "cat"){
    alert("car is smaller than cat");
}
OUTPUT: displayed

}

function condition() {
    var grade , remarks ;
    var sub1 = Number(prompt("Enter obtained marks of subject 1: "));
    var sub2 = Number(prompt("Enter obtained marks of subject 2: "));
    var sub3 = Number(prompt("Enter obtained marks of subject 3: "));
    var total = Number(prompt("Enter total marks: "));
    var per = (sub1 + sub2 + sub3) * 100 / total;
    
    if (per >= 80){
        grade = 'A-one';
        remarks = 'Excellent';
    }
    else if (per >= 70){
        grade = 'A';
        remarks = 'Good';
    }
    else if (per >= 60){
        grade = 'B';
        remarks = "You need to improve";
    }
    else{
        grade = "Fail";
        remarks = 'Sorry';
    }
    document.write("<h1> Marks Sheet </h1><br>");
    document.write("Total marks :",total);
    document.write("<br>Marks Obtained : ", sub1+sub2+sub3);
    document.write("<br>Percentage : ",per,"%");
    document.write("<br>Grade : ",grade);
    document.write("<br>Remarks : ",remarks);
    
}

function game() {

alert("GUESSING GAME")
var secret_num = 7;
var guessed_num = Number(prompt("Guess the number : "));
if (guessed_num == secret_num){
    alert("Bingo! Correct answer");
} 
else if ((guessed_num+1) == secret_num){
    alert("Close enough to the correct answer");
}else{
    alert("It's looks like you are not even close this time.")
}
}

function divisible() {
    var num = Number(prompt("Enter the number to check whether the given number is divisible by 3 or not : "));
     if (num % 3 == 0){
         alert(num + " is divisible by 3");
     }else{
         alert(num + " is not divisible by 3")
     }
}

function evenodd() {
    var num = Number(prompt("Enter the number : "));
if (num % 2 == 0){
    alert(num + " is Even ");
}
else{
    alert(num + " is Odd ");
}
}

function temperature() {
    var T = Number(prompt("Enter temperature in Celsius : "));
if (T > 40){
    alert("It is too hot outside.");
}
else if (T > 30){
    alert("The Weather today is Normal.");
}
else if (T > 20){
    alert("Today’s Weather is cool.");
}
else if (T > 10){
    alert("OMG! Todays Weather is cool.");
}
}

function operator() {
var num1 = Number(prompt("Enter first number : "));
var num2 = Number(prompt("Enter Second number : "));
var op = prompt("Enter operator (+, -, *, /, %) : ");
if (op == '+'){
    alert("The answer after Addition is : " + +num1+ +num2);
}
else if (op == '-'){
    alert("The answer after Subtraction is : ",num1-num2);
}
else if (op == '*'){
    alert("The answer after Multiplication is : ",num1*num2); 
}
else if (op == '/'){
    alert("The answer after Division is : ",num2/num1);
}
else if (op == '%'){
    alert("The answer after Modulo is : ",num2%num1);
}
else{
    alert("Invalid operator");
}
}