//Q1
function signup() {
    console.log("signup works!")
    var username = document.getElementById("username").value;
    var password = document.getElementById("psw").value;
    if(username == ""){
        alert("Please enter a valid username")
    }else if(password == ""){
        alert("Please enter a valid password")
    }else{
        alert("Your signup info is correct!")
        document.getElementById("usertxt").innerHTML = "Username you entered: " + username
        document.getElementById("passtxt").innerHTML = "Password you entered: " + password
    }
}


//Q2
function readmore() {
    document.getElementById("lorem").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    console.log("works!")
}

//Q3 IS IN NEXT DOCUMENT BECAUSE OF THE FORM. (The form in question 1 is not allowing me to add a onclick() event.I have to Manually Add ;return false; at the end of every function name which is very inconvinient.)
//See Here: https://stackoverflow.com/questions/4012277/page-refreshes-automatically-onclick