
const h1 = document.querySelector('body').children[0];
// console.log(h1);
h1.setAttribute('style', 'color: red; font-size: 50px;');
h1.style.color = 'blue';

document.querySelectorAll('div div').forEach((element,ind,arr) => {
    console.log(element, ind, arr);
    // console.log(arr.length);
    if(ind == 0 || ind == arr.length-1) element.style.color = 'blue';
    else element.style.color = 'yellow';
});

const mappings = {
    Invitation:"A",
    Reminder : "B",
    Notice : "C of the party",
    Message : "         <h1>you are messaged of the party</h1>",
};

document.querySelectorAll('div div').forEach((element,ind,arr) => {
    element.children[1].textContent = mappings[element.children[0].textContent];
});

const newchild = document.createElement('div');
newchild.innerHTML = "<h1>new child</h1>";
document.querySelector('body').appendChild(newchild);
let t =4;
while(t--){
    const newele = document.createElement('div');
    newele.innerHTML = "<h1>new child 1</h1>";
    newchild.appendChild(newele);
}
document.querySelector('body').appendChild(newchild);

