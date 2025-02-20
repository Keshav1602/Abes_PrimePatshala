console.dir(window); //Window object represents BOM
console.dir(document);  //document represents DOM

//document is given by Windowa

document.write("hello"); //This will wrte hello on screen but is debricated because this creates node with  neither a opening nor closing tag

// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelector()
// document.guerSelectorAll()

const ele=document.getElementById("text");
const ele1=document.getElementsByClassName("para");
const ele2=document.getElementsByTagName("p");
const ele3=document.querySelectorAll('.para');
console.log(ele);
console.log(ele1);
console.log(ele2);
console.log(ele3);