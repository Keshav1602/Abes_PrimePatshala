let users = JSON.parse(localStorage.getItem('users')) || [
    {
        id: '1',
        name: "John Doe",
        email: "john.doe@example.com",
        city: "mumbai"
    },
    {
        id: '2',
        name: "Jane Smith",
        email: "jane.smith@example.com",
        city: "delhi"
    },
    {
        id: '3',
        name: "Michael Johnson",
        email: "michael.johnson@example.com",
        city: "mumbai"
    },
    {
        id: '4',
        name: "Emily Davis",
        email: "emily.davis@example.com",
        city: "noida"
    }
    ];
    
 const saveUsersToLocalStorage = () => {
    localStorage.setItem('users', JSON.stringify(users));
};



    const makeCard = (user) => {
        return `
                <h4>${user.name}</h4>
                <h6>${user.email}</h6>
                <p class = "text">${user.city}</p>
                <button class = "delete">delete</button>
        `;
    }
    
    
    const renderUsers = () => {
        const parent = document.getElementById("root");
        parent.innerHTML = '';
        if(users.length == 0){
            parent.innerHTML="<h1>No items in User</h1>";
        }
        users.forEach((user,i) => {
            const newdiv = document.createElement("div");
            newdiv.setAttribute("class", "card");
            newdiv.innerHTML = makeCard(user);
            newdiv.querySelector('.delete').addEventListener('click',(e) => deleteCard(e,user.id));
            parent.appendChild(newdiv);
        });
    }
    
    
    const handleSelect = (e)=>{
        const value = e.target.value;
        const parent = document.getElementById("root");
        parent.innerHTML = '';
        users.forEach((user,i) => {
            if(user.city.toLowerCase() === value.toLowerCase()){
            const newdiv = document.createElement("div");
            newdiv.setAttribute("class", "card");
            newdiv.innerHTML = makeCard(user);
            newdiv.querySelector('.delete').addEventListener('click',(e) => deleteCard(e,user.id));
            parent.appendChild(newdiv);
            }
        });
        console.log(parent.childElementCount);
        if(parent.childElementCount === 0){
            const parent = document.getElementById("root");
            parent.innerHTML=`<h1>No items in User of city ${value}</h1>`;
        }
        console.log(value);
    }
    
    
    const deleteCard = (e,id)=>{
        console.log("delete user",id)
        e.target.parentElement.remove();
        let idx = users.findIndex((elem)=>elem.id == id);
        users.splice(idx,1); 
        saveUsersToLocalStorage();
        if(users.length===0){
            const parent = document.getElementById("root");
            parent.innerHTML = '';
            parent.innerHTML="<h1>No items in User</h1>";
        }
        return;
    }
    
    
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        const isEmailExists = users.some((elem)=>{
            return elem.email == e.target.email.value;
        }) 
        if(isEmailExists){
            alert("Email already exist");
            return;
        }
        const newElem = {
            id : (users.length + 1).toString(),
            name : e.target.name.value,
            email : e.target.email.value,
            city : e.target.city.value,
        }
        users.push(newElem);
        saveUsersToLocalStorage();
        renderUsers();
    }
    
    const cityCalibration = () =>{
        cities = users.map((elem)=>elem.city);
        Set_city = new Set(cities);
        
        const selectP = document.querySelector("select");
        selectP.innerHTML='';
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.innerText = 'Select a city';
        selectP.appendChild(defaultOption);
        Set_city.forEach((c)=>
        {
            const newEle = document.createElement('option')
            newEle.value = c.toLowerCase();
            newEle.innerText = c;
            selectP.appendChild(newEle);
        }
    )
    }
    renderUsers();
    cityCalibration();