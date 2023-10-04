var age = "13"
birthyear = "2007"

alert("I am " + age + " years-old")

// It tells you the number based on how many times you have opened the index.html file(NOT BY REFRESHING)
function visitCount() {
    var visits = Number(localStorage.getItem('visitCount'));
    var current = Boolean(sessionStorage.getItem('session'));
  
    if (!current) {
      visits++;
    }
  
    localStorage.setItem('visitCount', visits);
    sessionStorage.setItem('session', true);
  
    return alert("You have visited this site " + visits + " time(s)");
  }
function birthhtm(){
  document.getElementById("birth").innerHTML = "My birth year is" + birthyear;
  var name = prompt("Your full name")
  var item = prompt("What Item Do you want to order")
  var order = prompt("How many quantity would you like to order?")
  document.getElementById("ordertxt").innerHTML = name +" has ordered " + order + item + " on XYZ Clothing store"
}