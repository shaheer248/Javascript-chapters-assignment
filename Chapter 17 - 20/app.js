//Q1
var mul_arr = [[]];

//Q2
var mul_arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

//Q3
function first() {
for (i=1;i<=10;i++){
    document.write(i,"<br>");
}
}

//Q4
function lengths() {
var num = Number(prompt("Enter a number : "));
var len = Number(prompt("Enter length of a table : "));
document.write("Multiplication of table of ",num);
document.write("<br>Length ",len,"<br><br>");
for (i=1 ; i<=len ; i++){
    var ans = num*i;
    document.write(num," * ",i," = ",ans);
    document.write("<br>");
}
}

//Q5
function fruit() {
var fruits = ["Apple" , "Banana" , "Mango" , "Orange" , "Strawberry"];
for (i=0 ; i<fruits.length ; i++){
    document.write(fruits[i],"<br>");
}
document.write("<br>");

for (i=0 ; i<fruits.length ; i++){
    document.write("Element at index ",i," is ",fruits[i],"<br>");
}
}

//Q6
function counting() {
document.write("<b> Counting: </b><br><br>")
for (i=1 ; i<=15 ; i++){
    document.write(i,",");
}


document.write("<br><br><b> Reverse Counting: </b><br><br>")
for (i=10 ; i>0 ; i--){
    document.write(i,",");
}

document.write("<br><br><b> Even: </b><br><br>")
for (i=0 ; i<21 ; i++){
    if (i % 2 == 0)
    document.write(i,",");
}

document.write("<br><br><b> Odd: </b><br><br>")
for (i=0 ; i<21 ; i++){
    if (i % 2 != 0)
    document.write(i,",");
}

document.write("<br><br><b> Series: </b><br><br>")
for (i=2 ; i<21 ; i++){
    if (i % 2 == 0)
    document.write(i,"k,");
}
}

//Q7
function cake() {
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var order = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am ?");
var bool = A.includes(order);
var ind = A.indexOf(order); 
if (bool == true){
    document.write(order," is <b>available</b> at index ", ind ," in our bakery");
}
else{
    document.write("We are sorry.",order," is <b>not available</b> in our bakery");
}
}

//Q8
function amax() {
var A = [24, 53, 78, 91, 12];
var max = A[0] ;
for (i=0 ; i<A.length ; i++){
    if (max < A[i]){
        max = A[i];
    }
}
document.write("Arrays Items : ",A);
document.write("<br>The Largest Number is ",max);
}

//Q9
function amin() {
var A = [24, 53, 78 , 91, 12];
var min = A[0];
for (i=1 ; i<A.length ; i++){
   if (min > A[i]){
      min = A[i];
   }
}
document.write("Arrays Items : ",A);
document.write("<br>The Smallest Number is ",min);
}

//Q10
function wirenum() {
let num = 5;
for (i=1 ; i<=20 ; i++){
    document.write(num*i,",");
}
}