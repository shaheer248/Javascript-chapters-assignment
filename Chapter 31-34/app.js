
function browserdatetime() {
    var time = new Date();
    document.getElementById("datetime").innerHTML = time
}

function monthname() {
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const d = new Date();
document.getElementById("namemonth").innerHTML = "The current month is " + monthNames[d.getMonth()];
}

function sat() {
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri",
  "Sat"];

const d = new Date();
document.getElementById("sattxt").innerHTML = "The current day is " + dayNames[d.getDay()];
}

function funday() {
    var today = new Date();
    if(today.getDay() == 6 || today.getDay() == 0){
     alert('Its Fun Day!');
     document.getElementById("funtxt").innerHTML = "Its Fun Day!"
    }else{
        alert("Sorry but today is not a fun day")
        document.getElementById("funtxt").innerHTML = "Sorry but today is not a fun day"
    }
}

function firstdays() {
  const dateNames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const d = new Date();
var final = "The current date is " + dateNames[d.getDate()];
if(final < 15){
  alert("It's the first fifteen days of the month")
  document.getElementById("firstdayz").innerHTML = "It's the first fifteen days of the month"
}else{
  alert("It's the last days of this month")
  document.getElementById("firstdayz").innerHTML = "It's the last days of this month"
}
}
function minutessince() {
  dt1 = new Date();
  dt2 = new Date("January 1, 1970 00:00:00");
  alert("It has been this much minutes since Jan 1, 1970: " + diff_minutes(dt1, dt2));
2
}

function DisplayCurrentTime() {
  var date = new Date();
  var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  time = hours + ":" + minutes + ":" + seconds;
  var lblTime = document.getElementById("lblTime");
  lblTime.innerHTML = time;
  if(time < 12){
    alert("It's AM right now.")
    document.getElementById("DisplayCurrentTime").innerHTML = "It's AM right now."
  }else{
    alert("It's PM right now.")
    document.getElementById("DisplayCurrentTime").innerHTML = "It's PM right now."
  }
};

function RamadanTime() {
  var date1 = new Date("06/18/2015"); 
  var date2 = new Date(); 
  
var Difference_In_Time = date2.getTime() - date1.getTime(); 
  
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
  
alert("Total number of days from 1 Ramadan, 2015 is: " + Math.floor(Difference_In_Days) + " Days");
document.getElementById("RamadanTime").innerHTML = "Total number of days from 1 Ramadan, 2015 is: " + Math.floor(Difference_In_Days) + " Days"
}

function reference() {
  var date1, date2;
         date1 = new Date( "Jan 01, 2015 00:00:00" );
         date2 = new Date( "Dec 05, 2015 22:50:16" );
         var seconds = Math.abs(date1 - date2) / 1000;
         alert("On reference date Sat Dec 05 2015 22:50:16 GMT+0500 (PKT), "+ Math.floor(seconds) + " seconds had passed since the beginning of 2015");
         document.getElementById("reference").innerHTML = "On reference date Sat Dec 05 2015 22:50:16 GMT+0500 (PKT), "+ Math.floor(seconds) + " seconds had passed since the beginning of 2015"
}

function hourago() {
  var d = new Date();
  d.setHours(d.getHours() - 1);
  var empty;
  alert("1 hour ago, it was " + d);
  document.getElementById("hourago").innerHTML = "1 hour ago, it was " + d
}

function daysago() {
  var d = new Date();
  d.setFullYear(d.getFullYear() - 100);
  var empty;
  alert("100 years ago, it was " + d);
  document.getElementById("daysago").innerHTML = "1 hour ago, it was " + d
}

function calc (form) {
  form.answer.value = form.picknumber.value * 2 + 5 * 50 + form.number.value - form.year.value - 250 - 2250 - 2556950 + 3 - 300   
}

function kbill() {
  var divContents = document.getElementById("kbill").innerHTML;
            var printWindow = window.open('', '', 'height=200,width=400');
            printWindow.document.write('<html><head><title>DIV Contents</title>');
            printWindow.document.write('</head><body >');
            printWindow.document.write(divContents);
            printWindow.document.write('</body></html>');
            printWindow.document.close();
            printWindow.print();
}