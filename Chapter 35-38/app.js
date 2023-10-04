
function timeidea() {
    d = new Date();
    document.getElementById("time").innerHTML = d
}

function names() {
    var input = document.getElementById("nameinput").value
    var output = document.getElementById("nameoutput").value
    var text = document.getElementById("name").innerHTML
    alert("Your full name is " + input + " " + output)
    text = "Your full name is " + input + " " + output
}

function nums() {
    var input = document.getElementById("numinput").value
    var output = document.getElementById("numoutput").value
    var process = +input + +output
    var text = document.getElementById("num").innerHTML
    alert("The answer is:  " + process)
    text = "The answer is: " + process
}

let display = document.getElementById("display");
display.innerHTML = 0;
function pressBtn(btn) {
  let pressed = btn.value;
  let expr = display.innerHTML;
  if (pressed === '=') {
    display.innerHTML = eval(expr);
  }
  else if (pressed==="<"){
    display.innerHTML = display.innerHTML.substring(0, expr.length-1);
  }
  else if (pressed === ".") {
    if (display.innerHTML.indexOf('.') !=-1 && display.innerHTML.match(/\/|\*|\+|-/g) === null || display.innerHTML.substring(expr.length-1, expr.length) == '.') {
      display.innerHTML = display.innerHTML;
    }
    else {
      display.innerHTML = display.innerHTML + pressed;
    }
  }
  else if (pressed.match(/\/|\*|\+|-/g)){
    if (display.innerHTML.substring(expr.length-1, expr.length).match(/\/|\*|\+|-/g)){
      display.innerHTML = display.innerHTML.replace(display.innerHTML.substring(expr.length-1, expr.length).match(/\/|\*|\+|-/g), pressed);
    }
    else {
      display.innerHTML = display.innerHTML + pressed;
    }
  }
  else if (pressed === 'C') {
    display.innerHTML = '0';
  }
  else {
    if (display.innerHTML === '0') {
      display.innerHTML = pressed;
    }
    else {
    display.innerHTML = display.innerHTML+btn.value;
    }
  }

}

function showresult(choise){
var n1=parseFloat(document.getElementById('num1').value);
var n2=parseFloat(document.getElementById('num2').value);
var r;
var c=choise;

switch(c)
	{
	case '1':
		r=n1+n2;
		break;
	case '2':
		r=n1-n2;
		break;
	case '3':
		r=n1*n2;
		break;
	case '4': 
		r=n1/n2;
		break;
	case '5':
		r=n2*100/n1;
		break;
	default:
		break;
			
	}
document.getElementById('result').value=r;

	

}