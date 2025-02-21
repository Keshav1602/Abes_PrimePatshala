const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        city: "New York"
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        city: "Los Angeles"
    },
    {
        id: 3,
        name: "Michael Johnson",
        email: "michael.johnson@example.com",
        city: "Chicago"
    },
    {
        id: 4,
        name: "Emily Davis",
        email: "emily.davis@example.com",
        city: "San Francisco"
    }
];

const makeCard = (user) => {
    return `
            <h4>${user.name}</h4>
            <h6>${user.email}</h6>
            <p class = "text">${user.city}</p>
            <button class = "delete">delete</button>
    `;
}

const renderUsers = () => {
    const parent = document.getElementById("parent");
    parent.innerHTML = '';
    users.forEach((user,i) => {
        const newdiv = document.createElement("div");
        newdiv.setAttribute("class", "card");
        newdiv.addEventListener('click', () => {
            newdiv.style.backgroundColor = getRandomColor();
        });
        newdiv.innerHTML = makeCard(user);
        newdiv.querySelector('.delete').addEventListener('click',(e)=>{
            const deleteCard = e.target.parentElement;
            const index = deleteCard;
            console.(deleteCard);
            e.target.parentElement.remove();
        })
        parent.appendChild(newdiv);
    });
}

const changebg = () => {
    
    const cards = document.querySelectorAll('.card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = getRandomColor();
    }

}


const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

renderUsers();
const textelement = document.querySelector('.text');
textelement.addEventListener('click', () => {
    textelement.style.backgroundColor = getRandomColor();
});

// document.querySelectorAll('.delete').forEach((button)=>button.addEventListener('click',(e)=>{
//     e.target.parentElement.remove();
// }
// ));







//---------------------------------------------------


// setInterval(changebg, 100);

// const BOOM = () => {setInterval(() => {
//     changebg();
//     // document.querySelector('.text').style.backgroundColor = getRandomColor();
//     document.querySelector('body').style.backgroundColor = getRandomColor();
//     const cards = document.querySelectorAll('.card');
//     cards.forEach((card, index) => {
//         if(card.style.transform === '') {
//             if (index % 2 === 0) {
//             card.style.transform = 'translateX(-30px)';
//             } else {
//             card.style.transform = 'translateX(30px)';
//             }
//         }
//         else{
//             if(card.style.transform === 'translateX(-30px)'){
//                 card.style.transform = 'translateX(30px)';
//             }
//             else{
//                 card.style.transform = 'translateX(-30px)';
//             }

//         }
//     });
// }, 50);}
