
// const body = document.querySelector('.parent');
// const newlist = document.createElement('ul');
// newlist.textContent = 'ITEMS';
// body.appendChild(newlist);
// for(let  i = 1;i<=3;i++){
//     const newli = document.createElement('li');
//     newli.textContent = `List item ${i}`;
//     newlist.appendChild(newli);
// }

// --------------------------------------------

// console.log(React);
// console.log(ReactDOM);


//------------------------------------------------

// const domroot = document.getElementsByClassName('parent')[0];
// const reactRoot = ReactDOM.createRoot(domroot);

// const li1 = React.createElement('li', null , "list item 1");  // React.createElement('tag', 'props', 'children')
// const li2 = React.createElement('li', null , "list item 2");
// const li3 = React.createElement('li', null , "list item 3");
// const ui = React.createElement('ul', null , [li1,li2,li3]);

// reactRoot.render(ui);


// -----------------------------------------------


// const domroot = document.getElementsByClassName('parent')[0];
// const reactRoot = ReactDOM.createRoot(domroot);

// const title = React.createElement('h1', null , "Hello World");

// console.log('title', title);
// console.log(typeof title);

// // creating my own react element
// const title2 = {
//     $$typeof: Symbol.for("react.element"),
//     "type": "h1",
//     "key": null,
//     "ref": null,
//     "props": {
//         "children": "Hello World"
//     },
//     "_owner": null,
//     "_store": {}
// }
// reactRoot.render(title2);

// ========================================================



const domroot = document.getElementsByClassName('parent')[0];
const reactRoot = ReactDOM.createRoot(domroot);

// functional element
// const title = <h1> hello world</h1> 
// reactRoot.render(title);

const Title = ()=>{ // functional component

 return <h1> hello world</h1>;
}

// reactRoot.render(Title());
reactRoot.render(<Title/>);


// comopent and element difference
// component is a function which returns an element
// element is a javascript object which is returned by component function
