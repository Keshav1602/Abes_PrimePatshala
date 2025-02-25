// console.log("start");

// const handleInnerCall = ()=>{
//     console.log("step Y");
// };


// const handleCall = ()=>{
//     console.log("step M");
//     handleInnerCall();
//     console.log("step n");
// };

// // handleCall();
// document.querySelector('body').addEventListener('click',handleCall);
// console.log("end");

// ---------------------------------------------------

// const res = fetch("https://dummyjson.com/products");
// const res = fetch("https://api.github.com/users/Keshav1602");
// console.dir(res);

// res.then((a) =>{
//     console.log("a",a);
//     const pr2 = a.json();
//     pr2.then((data)=>{
//         // console.log(data);
//         showUI(data);
//     })
// }).catch((e)=>{
//     console.log("e",e);
// })

function showUI(data)
{
    //Responsible for creating visualization.
    console.log("data",data);
    const {login , avatar_url , html_url}=data;
    const card=document.getElementById("card");
    card.innerHTML=`
        <h4>${login.toUpperCase()}</h4>
        <img src='${avatar_url}' alt="Me">
        <a href='${html_url}'>View Profile</a>`;
}

const getData = (profile)=>{
    
    const pr = fetch(`https://api.github.com/users/${profile}`);
    console.log(pr);
    pr.then((a)=>{
        const pr2 = a.json();
        pr2.then((data)=>{
            showUI(data);
        })
    })

}

document.getElementById("btn-search").addEventListener('click',()=>{
    getData(document.getElementById("search").value);
});