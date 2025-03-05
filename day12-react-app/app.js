import {React} from "react";
import {ReactDOM} from "react-dom";


const domroot = document.getElementsByClassName('parent')[0];
const reactRoot = ReactDOM.createRoot(domroot);


const title = <h1> hello </h1>

reactRoot.render(title);