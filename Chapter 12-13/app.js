
function chars() {
var inp = prompt("Enter a character : ");
if (inp >= 'A' && inp <= 'Z'){
    alert("The inputted character is Upper case");
}
else if (inp >= 'a' && inp <= 'z'){
    alert("The inputted character is Lower case");
}
else if (inp >= '0' && inp <= '9'){
    alert("The inputted character is a Number");
}
}

function bigger() {

var num1 = Number(prompt("Enter number 1 : "));
var num2 = Number(prompt("Enter number 2 : "));
if (num1 > num2){
    alert(num1);
}
else if (num1 < num2){
    alert(num2);
}
else if (num1 == num2){
    alert(num1);
}
}

function positive() {
var num = Number(prompt("Enter any number : "));
if (num > 0){
    alert("The number " + num + " is Positive");
}
else if (num < 0){
    alert("The number " + num + " is Negative");
}
else{
    alert("The number is 0");
}
}

function singlechar() {

var inp = prompt("Input a single character :");
if (inp =='a' || inp =='e' || inp =='i' || inp =='o' || inp =='u' || inp =='A' || inp =='E'
|| inp =='I' || inp =='O' || inp =='U'){
    alert('True')
} 
else{
    alert("False");
}
}

function storepass() {

var store_pass = prompt("Store your password : ");
var inp_pass = prompt("Re enter your password : ");
if (inp_pass == ""){
    alert("Enter your password :");
    var inp_pass = prompt("Re-enter your password !");
}
if (inp_pass == store_pass){
    alert("Correct! The password you entered matches the original password")
} 
else{
    alert("Incorrect Password");   
}

}

function greet() {

var hour = 13;
 if (hour < 18) {
      alert("Good day");
 }else{
      alert("Good evening");
    }
}

function times() {

var time = Number(prompt("Enter time in 24 hours format : "));
if (time >= 0000 && time < 1200){
    alert("Good Morning!")
}
else if (time >= 1200 && time < 1700){
    alert("Good Afternoon!")
}
else if (time >= 1700 && time < 2100){
    alert("Good Evening!")
}
else if (time >= 2100 && time <= 2359){
    alert("Good Night!")
}

}