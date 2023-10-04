//Q1-2
function linkalert() {
    alert("Thanks for using our webpage to visit YouTube.")
}

//Q3
function tablefirst() {
    var elem = document.getElementById("first");
    elem.parentNode.removeChild(elem);
    return false;
}

function tablesec() {
    var elem = document.getElementById("sec");
    elem.parentNode.removeChild(elem);
    return false;
}

function tablethird() {
    var elem = document.getElementById("third");
    elem.parentNode.removeChild(elem);
    return false;
}

function tablefour() {
    var elem = document.getElementById("fourth");
    elem.parentNode.removeChild(elem);
    return false;
}

function reset() {
    location.reload();
}

//Q4
function rollover(my_image){
        my_image.src = 'img2.jpg';
}

function mouseaway(my_image)
    {
        my_image.src = "img1.jpg";
    }

//Q5
var clicks = 0;
    function counter() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };

    function ncounter() {
        clicks -= 1;
        document.getElementById("clicks").innerHTML = clicks;
    };