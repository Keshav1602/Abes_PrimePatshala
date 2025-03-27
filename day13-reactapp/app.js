import React from "react";
import ReactDOM from "react-dom/client";

const domRoot=document.getElementById("parent");
const reactRoot=ReactDOM.createRoot(domRoot);

const Card = (props) => {
    console.log(props);
    return(
        <div className="card">
            <h2>Hello </h2>
            <p>{`Nice to meet you ${props.props}`}</p>
        </div>
    )
};

const App = ()=>{
    return(
        // <div>
        //     <h1>Hello MF!!!!!!!</h1>
        // </div>
        // React.createElement("h1",{},"Hello MF!!!!!!!")
        <div>
        <Card props="Keshav"></Card>
        <Card props="Devu"></Card>
        <Card props="Jau"></Card>
        {/* {Card("Keshav")} */}
        </div>
    )
};
// reactRoot.render(App());
reactRoot.render(<App/>);