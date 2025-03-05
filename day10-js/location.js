const getData = (text) => {
    const pr = fetch(`https://google-map-places.p.rapidapi.com/maps/api/place/autocomplete/json?input=${text}&language=en&region=en`, {
        method: "GET",
        headers: {
            'x-rapidapi-host': 'google-map-places.p.rapidapi.com',
            'x-rapidapi-key': ' 564e30a29amsh1970b6bc120c722p13af61jsn0516b155fa1b'
        }
    });
    pr.then((res) => {
        const pr2 = res.json();
        pr2.then((data) => {
            console.log(data)
            showCards(data.predictions);
        })
    })
}


const root = document.getElementById("location");
root.addEventListener("click",(e)=>{
    console.log(e.target.id)
    getSpecificLocation(e.target.id);

})
const showCards = (dataArr) => {
    root.innerHTML = "";
    dataArr.forEach(ele => {
        const newDiv = document.createElement('div');
        newDiv.className = 'card';
        newDiv.innerHTML = `
        <p id='${ele.place_id}'>${ele.description}</p>
        `;
        root.appendChild(newDiv);

    });

}
let timeoutId = null;

const handleSearch = (e) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        getData(e.target.value);
    }, 1000);

}

const getSpecificLocation = (placeId) => {
    const pr = fetch(`https://google-map-places.p.rapidapi.com/maps/api/place/details/json?place_id=${placeId}&region=en&fields=all&language=en&reviews_no_translations=true `, {
        method: "GET",
        headers: {
            'x-rapidapi-host': 'google-map-places.p.rapidapi.com',
            'x-rapidapi-key': ' 564e30a29amsh1970b6bc120c722p13af61jsn0516b155fa1b'
        }
    });
    pr.then((res) => {
        const pr2 = res.json();
        pr2.then((data) => {
            console.log(data);
            //from here

            const {result}=data;
                const rootNew=document.getElementById('location-info');
                rootNew.innerHTML=`
                    <h4>${result.name}</h4>
                    <p>${result.formatted_address}</p>
                    <img src="${result.icon}"/>
                    <a href="${result.url}" target="_blank">Open</a>`;
                    const getSpecificLocation = (placeId) => {
    const pr = fetch(`https://google-map-places.p.rapidapi.com/maps/api/place/details/json?place_id=${placeId}&region=en&fields=all&language=en&reviews_no_translations=true `, {
        method: "GET",
        headers: {
            'x-rapidapi-host': 'google-map-places.p.rapidapi.com',
            'x-rapidapi-key': ' 564e30a29amsh1970b6bc120c722p13af61jsn0516b155fa1b'
        }
    });
    pr.then((res) => {
        const pr2 = res.json();
        pr2.then((data) => {
            console.log(data);
            //from here
            
            const {result}=data;
            console.log(result);
                const rootNew=document.getElementById('location-info');
                rootNew.innerHTML=`
                    <h4>${result.name}</h4>
                    <p>${result.formatted_address}</p>
                    <img src="${result.icon}"/>
                    <a href="${result.url}" target="_blank">Open</a>
                    ${
                        result.photos.map(photoObj=>{
                            return `<img src="${photoObj.photo_reference}"/>`
                        })
                    }
                    `;
                root.innerHTML="";
                    
            //till here        
        })
    })

}
                root.innerHTML="";
                    
            //till here        
        })
    })

}