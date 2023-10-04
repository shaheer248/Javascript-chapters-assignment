function values(){
 var a = 10;
 document.write("Result:<br>")
 document.write("The value of a is: ",a,"<br>");
 document.write(".................................<br><br>");
 document.write("The value of ++a is: ",++a,"<br>");
 document.write("Now the value of a is: ",a,"<br><br>");
 document.write("The value of a++ is: ",a++,"<br>");
 document.write("Now the value of a is: ",a,"<br><br>");
 document.write("The value of --a is: ",--a,"<br>");
 document.write("Now the value of a is: ",a,"<br><br>");
 document.write("The value of a-- is: ",a--,"<br>");
 document.write("Now the value of a is: ",a,"<br><br>");
}

function explaination() {
 var a = 2, b = 1;
 var result = --a - --b + ++b + b--;

 document.write("a is ",a,"<br>");
 document.write("b is ",b,"<br>");
 document.write("result is ",result,"<br>");

 document.write("<br> EXPLAINATION: <br>");
 document.write(" --a;  1 <br>");
 document.write("--a - --b;  1-0 <br>");
 document.write("--a - --b + ++b;  1 + 1 <br>");
 document.write("--a - --b + ++b + b--;   2 + 1  = 3 <br>");
 document.write("after execution of b-- , b will be 0 in the end")
}
function username() {
var name = document.getElementById("name").value;
alert("Welcome, " + name)
}

function printTable(){
    var num;
    num=Number(document.getElementById('txtNumber').value);
    for(var i=1; i<=10; i++){
        var pTag= document.getElementById('pPrint');
        pTag.innerHTML += (num*i) + "<br/>" 
    }
}

function last() {
var sub1 , sub2 , sub3 , obt_sub1 , obt_sub2 , obt_sub3 , each_total = 100;
sub1 = prompt("Enter 1st Subject name : ");
sub2 = prompt("Enter 2nd Subject name : ");
sub3 = prompt("Enter 3rd Subject name : ");
obt_sub1 = Number(prompt("Enter obained marks of 1st Subject : "));
obt_sub2 = Number(prompt("Enter obained marks of 2nd Subject : "));
obt_sub3 = Number(prompt("Enter obained marks of 3rd Subject : "));
var sub1_per = obt_sub1 * 100 / each_total;
var sub2_per = obt_sub2 * 100 / each_total;
var sub3_per = obt_sub3 * 100 /each_total;
var total_obt = obt_sub1 + obt_sub2 + obt_sub3;
var total = each_total + each_total + each_total;
var per = (sub1_per + sub2_per + sub3_per) / 3 ;
document.write("<table>")
document.write("<tr> <th>Subject</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th> </tr>");
document.write("<tr> <td>", sub1 ,"</td> <td>", each_total,"</td> <td>",obt_sub1,"</td> <td>",sub1_per,"%</td> </tr>");     
document.write("<tr> <td>", sub2 ,"</td> <td>", each_total,"</td> <td>",obt_sub2,"</td> <td>",sub2_per,"%</td> </tr>");  
document.write("<tr> <td>", sub3 ,"</td> <td>", each_total,"</td> <td>",obt_sub3,"</td> <td>",sub3_per,"%</td> </tr>");       
document.write("<tr> <th> </th> <th>",total,"</th> <th>",total_obt,"</th> <th>",per,"</th> </tr>");
document.write("</table>");

}