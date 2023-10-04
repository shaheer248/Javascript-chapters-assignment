//Q1
function domfun() {
var maincontent = document.getElementById("main-content")
var childmaincontent = maincontent.childNodes
var classchildren = document.getElementsByClassName("render");
document.getElementById("first-name").value = "Alex"
document.getElementById("last-name").value = "Bank"
document.getElementById("email").value = "alexbank@example.com"
document.getElementById("childnodetxt").innerHTML = "The child elements of “main-content” element are " + childmaincontent
document.getElementById("childelemtxt").innerHTML = "The elements of class “render” are " + classchildren
}

//Q2
function fundom() {
    var formnode = document.getElementById("form-content").nodeType;
    document.getElementById("formnodetxt").innerHTML = "Node type of form-content is " + formnode
    var lastnode = document.getElementById("lastName").nodeType;
    document.getElementById("lastnodetxt").innerHTML = "Node type of lastName is " + lastnode
    var firstchild = document.getElementById("main-content").firstChild.nodeName;
    document.getElementById("firstchildtxt").innerHTML = "The first child of main-content is " + firstchild;
    var lastchild = document.getElementById("main-content").lastChild.nodeName;
    document.getElementById("lastmaintxt").innerHTML = "The last child of main-content is " + lastchild;
    var item = document.querySelector('#lastName');
    var prev = item.previousElementSibling;
    var next = item.nextElementSibling; 
    document.getElementById("prevnexttxt").innerHTML = "The previous element sibling of lastName is " + prev + " and the next element sibiling of lastName is " + next;
    var parentnode = document.getElementById("email").parentNode.nodeName;
    document.getElementById("parenttxt").innerHTML = "The parentnode of email is " + parentnode;
}