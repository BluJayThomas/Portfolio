var ourList = document.getElementById ("our-list");
var ourHeadline = document.getElementById ("our-headline");
var listItems = document.getElementById("our-list").getElementsByTagName ("li");
var ourButton = document.getElementById ("our-button");
var newItemCounter = 1;



ourList.addEventListener("click", activateItem);

function activateItem (e) {
if (e.target.nodeName =="LI") {
    ourHeadline.innerHTML = e.target.innerHTML;
for (i = 0; i < e.target.parentNode.children.length; i ++) {
    e.target.parentNode.children[i].classList.remove("active");
}
}
e.target.classList.add("active"); 
}

ourButton.addEventListener("click", addNewItem);

function addNewItem (){
    ourList.innerHTML += "<li>Something New " + newItemCounter + "</li>";
    newItemCounter ++ ;
}
 