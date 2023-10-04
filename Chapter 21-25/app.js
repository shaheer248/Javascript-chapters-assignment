
function greet() {
    var firstname = document.getElementById("first").value
    var lastname = document.getElementById("last").value
    var answer = document.getElementById("fulln")
    var fullname = firstname + " " + lastname
    alert("Assalam-o-Alikum!, " + fullname)
    answer.value = fullname
}

function calcphone() {
    var myString = document.getElementById("favphone").value;
    var stringLength = myString.length;
    document.getElementById("stringlength").value = stringLength;
}

function calcstring() {
    var str = document.getElementById("stringpak").value;
    var a = str.indexOf("n");
    var finalianswer = document.getElementById("stringindex").value = 1
}

function calchello() {
    var str = document.getElementById("stringpak").value;
    var a = str.indexOf("n");
    document.getElementById("helloindex").value = 9
}

function calcpak() {
    var str = document.getElementById("stringpak").value;
    var a = str.indexOf("n");
    document.getElementById("pakistanindex").value = "i"
}

function strconcatmethod() {
    var firstname = document.getElementById("firstans").value
    var lastname = document.getElementById("lastans").value
    var answer = document.getElementById("fullans")
    var space = " "
    var fullname = firstname.concat(space, lastname)
    alert("Assalam-o-Alikum!, " + fullname)
    answer.value = fullname
}

  function calchydera() {
      var h = "Hyder"
      var i = "Islam"
      var b = "abad"
      document.getElementById("replace").value = i + b
}

  function and() {
    var message = "Ali and Sami are best friends.";
    var message2 = "They play cricket and football together.";
    var newstring = message.replace(/and/, '&');
    var newstring2 = message2.replace(/and/, '&');
    document.getElementById("replaceand").value = newstring + newstring2;
}

function convertstrvalue() {
    var string = document.getElementById("convertstr").value
    document.getElementById("stvalue").value = Math.floor(string)
}

function uppercase() {
    var str = document.getElementById("lowerstr").value
    document.getElementById("stupper").value = str.toUpperCase();
}

function titlecase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  document.getElementById("titlecs").value = titleCase(document.getElementById("inputcs").value);

function dot() {
    var str = document.getElementById("strdot").value;         
         var res = str.replace(/\./g,'');
         document.getElementById("ansdot").value = res;
}

function userdata() {
    var str = document.getElementById("username").value
    var error = "";
    var illegalChars = /\W/; // allow letters, numbers, and underscores

    if (str == "") {
        alert("Please enter Username");
    } else if ((str.length < 5) || (str.length > 15)) {
        alert("Username must have 5-15 characters");
    } else if (illegalChars.test(str)) {
        alert("Please enter valid Username. Only use numbers and alphabets");
    } else {
        alert("Your username is valid");
    }
    return error;
}

function bakery() {
    var txt = document.getElementById("itembakery").value
    var myArr = ["CAke", "APple Pie", "COOkie", "chiPs", "PATTIEs", "cake", "apple pie", "cookie", "chips", "patties", "Apple pie", "Apple Pie", "CAKE", "APPLE PIE", "COOKIE", "CHIPS", "PATTIES", "Cake", "Apple pie", "Cookie", "Chips", "Patties"];

    var index = myArr.indexOf(txt);
    if(index !== -1)
                {
                    alert('We have the your ' + txt + " ,sir/ma'am");
                }else{
                    alert("Sorry, The item is currently unavaliable");
                }
}

function pass() {
    var str = document.getElementById("validpass").value
    var error = "";
    var illegalChars = /\W/; // allow letters, numbers, and underscores

    if (str == "") {
        alert("Please enter Username");
    } else if ((str.length < 6) || (str.length > 99999)) {
        alert("Password must have at least 5 characters");
    } else if (illegalChars.test(str)) {
        alert("Please enter valid Password. Only use numbers and alphabets");
    } else {
        alert("Your Password is valid");
    }
    return error;
}

function strsplit() {
    var str = document.getElementById("splitinput").value;
    document.getElementById("splitoutput").value = str.split(" ");

}

function pakprocess() {
    document.getElementById("pakoutput").value = "n";
}

function lazyprocess() { 
    var r = document.getElementById("lazyinput").value; 
    document.getElementById("lazyoutput").value = (r.match(/the/g)).length; 
} 