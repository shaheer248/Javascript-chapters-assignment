// Q1
var std_names = []

// Q2
var std_names = new Array();

// Q3
var str_arr = ["a","b","c"];

// Q4
var num_arr = [1,2,3,4];

// Q5
var bool_arr = [true,false,false,true];

// Q6
var mix_arr = ["a" , 1 , true];

//Q7
function series() {
var qual = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.Phil" , "PHD"];
var series = 1
document.write("<h2> Qualifications </h2>");
for(i = 0 ; i<qual.length ; i++){
    document.write(series + ") " + qual[i]);
    series++;
}
}

//Q8
function scores() {
var names = ["Mahnoor" , "Subhan" , "Rafay"];
var scores = [320 , 230 , 480] , per;
for(i = 0 ; i<scores.length ; i++){
    per = scores[i]/500*100;
    document.write("Score of ",names[i]," is ",scores[i],".Percentage: ",per,"%<br>");
}

}

//Q9
function colors() {
var colors = ["Yellow" , "Black" , "Red" , "Blue"] , series = 1;
for(i = 0 ; i<colors.length ; i++){
    document.write(series ,".  " , colors[i],"<br>");
    series++
}
var inp = prompt("Enter the color you want to add in the beginning : ");
colors.unshift(inp);
document.write("The updated array of colors : ",colors);
var inp = prompt("Enter the color you want to add in the end : ");
colors.push(inp);
document.write("<br>The updated array of colors : ",colors);
colors.unshift("White" , "Orange");
document.write("<br>The updated array of colors : ",colors);
colors.shift();
document.write("<br>The updated array of colors : ",colors);
colors.pop();
document.write("<br>The updated array of colors : ",colors);
var ind = Number(prompt("At which index you want to add color : "));
var name = prompt("Color Name : ");
colors.splice(ind , 0 , name);
document.write("<br>The updated array of colors : ",colors);
var del_ind = Number(prompt("At which index you want to delete color(s) : "));
var count = Number(prompt("How many colors you want to delete ? "));
colors.splice(del_ind , count);
document.write("<br>The updated array of colors : ",colors);

}

//Q10
function students() {
var score = [320,230,480,120];
var sorted = score.sort();
document.write("Scores of Students : ",score);
document.write("<br>");
document.write("Ordered Scores of Students : ",sorted);
}

//Q11
function cites() {
var cities = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"];
var selected_cities = [];
selected_cities.splice(0,0,cities[2],cities[3]);
document.write("<h4> Cities List: </h4>");
document.write(cities);
document.write(" <h4> Selected Cities List: </h4>");
document.write(selected_cities);
}

//Q12
function cat() {
var arr = ["This", "is", "my", "cat"];
document.write("Array :<br>",arr);
document.write("<br><br> String : <br>",arr.join(" ")); 
}

//Q13
function devices() {
var arr = ["Keyboard" , "Mouse" , "Printer" , "Monitor"];
document.write("Devices: <br>",arr);
for(i=0 ; i<arr.length ; i++){
    document.write("<br><br> Out: <br>",arr[i]);
}
}

//Q14
function device() {
var arr = ["Keyboard" , "Mouse" , "Printer" , "Monitor"];
document.write("Devices: <br>",arr);
for(i=arr.length-1 ; i>=0 ; i--){
    document.write("<br><br> Out: <br>",arr[i]);
}
}

//Q15
function companies() {
var manufacturers = ["Apple", "Samsung" , "Motorola" , "Nokia" , "Sony" , "Haier"];
document.write("<select name='devices' size='1'> <option value='apple'>", manufacturers[0] ,"</option>")
document.write("<option value='samsung'>", manufacturers[1] ,"</option>");
document.write("<option value='moto' selected>", manufacturers[2] ,"</option>");
document.write("<option value='nokia'>", manufacturers[3] ," </option>");
document.write("<option value='sony'>", manufacturers[4] ," </option>");
document.write("<option value='haier'>", manufacturers[5] ," </option> </select>");
}