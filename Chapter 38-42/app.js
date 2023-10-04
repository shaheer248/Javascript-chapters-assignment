function leapyear() {
    var year;
 
		year = document.getElementById("leap").value;
 
		if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
		{
            alert(year+" is a leap year");  
            document.getElementById("leaptxt").innerHTML = year+" is a leap year"
		}
		else
		{
            alert(year+" is not a leap year"); 
            document.getElementById("leaptxt").innerHTML = year+" is not a leap year"
            
		}
	}

    function triangle() {
        var a = 6
        var b = 8
        var c = 10
        var area = (a + b + c) / 2
            alert("The area of the triangle is " + area + " cm")
            document.getElementById("triangletxt").innerHTML = "The area of the triangle is " + area + "cm"
    }

    function percentage() {
        var first = document.getElementById("mar").value
        var second = document.getElementById("mark").value
        var third = document.getElementById("marks").value
        var total = document.getElementById("mtotal").value
        var pcent = +first + +second + +third;
        var arr = +first + +second +third
        var sum = 0;
    
    var numbersCnt = arr.length;
    var obtained = pcent;
    var percent = obtained * 100 / total;
    alert("The average is: " + Math.floor(arr / numbersCnt) + " and the percentage is: " + percent);
    document.getElementById("markstxt").innerHTML = "The average is: " + sum / numbersCnt + " and the percentage is: " + percent
}

function vowels() {
    var strings = prompt("Please enter your string to detect the vowels")                         

   string = strings.replace(/a|e|i|o|u/g,'');
         
  alert("Your answer after deleted vowels: " + string); 
  console.log(string); 
}

function km() {
    var input = prompt("Enter distance in KM")
    var m = input * 1000
    var ft = input * 3281;
    var inch = input * 39370;
    var cm = input * 100000;
    var output = "The distance in meters is: " + m + " ,the distance in feet is: " + ft + " ,the distance in inches is " + inch + " and finally the distance in centimeters is: " + cm
    alert(output)
}

function overtime() {
     var input = prompt("How many hours have you worked?")
     if(input <= 40){
         alert("You have not worked overtime (more than 40 hours)")
     }else{
         var hours = input - 40
         var overtime = hours * 12
         alert("You have earned Rs." + overtime + " extra for working overtime for " + hours + " hours")
     }
}

function notes() {
    var cash = prompt("Enter cash (in hundreds): ");                              
    var hundred = parseInt(cash / 100);
    var fifty = parseInt((cash % 100) / 50);
    var ten = parseInt(((cash % 100) % 50) / 10);
    alert('You will have ' + hundred + ' hundred notes, ' + fifty + ' fifty notes, and ' + ten + ' ten notes');
}
