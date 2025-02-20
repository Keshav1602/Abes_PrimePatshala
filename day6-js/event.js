const users = [
    {
        name: "John Doe",
        email: "john.doe@example.com",
        city: "New York"
    },
    {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        city: "Los Angeles"
    },
    {
        name: "Michael Johnson",
        email: "michael.johnson@example.com",
        city: "Chicago"
    },
    {
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
    `;
}

const renderUsers = () => {
    const parent = document.getElementById("parent");
    users.forEach((user,i) => {
        const newdiv = document.createElement("div");
        newdiv.setAttribute("class", "card");
        newdiv.addEventListener('click', () => {
            newdiv.style.backgroundColor = getRandomColor();
        });
        newdiv.innerHTML = makeCard(user);
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
// setInterval(changebg, 100);

const BOOM = () => {setInterval(() => {
    changebg();
    // document.querySelector('.text').style.backgroundColor = getRandomColor();
    document.querySelector('body').style.backgroundColor = getRandomColor();
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        if(card.style.transform === '') {
            if (index % 2 === 0) {
            card.style.transform = 'translateX(-30px)';
            } else {
            card.style.transform = 'translateX(30px)';
            }
        }
        else{
            if(card.style.transform === 'translateX(-30px)'){
                card.style.transform = 'translateX(30px)';
            }
            else{
                card.style.transform = 'translateX(-30px)';
            }

        }
    });
}, 50);}
