const url = 'https://jsonplaceholder.typicode.com/users';

let containerData = document.getElementById('container-data');

const getAPI = (url) =>{
    console.log(url);
    return fetch(url)
        .then((response) => response.json())
        .then((result)=>{
            showData(result);
        })
    }

    
const showData = (data)  =>{
    let html = "";
    data.forEach(item => {
        let {id,name,username,email,address,phone,website,company} = item;
        let addressAux =`Street : ${address.street} Suite: ${address.suite} City: ${address.city} ZipCode: ${address.zipcode} Geo: Lat=${address.geo.lat}, Lng=${address.geo.lng}`;
        let companyAux =`Name :${company.name} CatchPhrase : ${company.catchPhrase} Bs : ${company.bs} `;
        html += '<div class="card bg-dark text-white " style="width: 18rem;">'
        html += '<div class="card-body">';
        html += `<h5 class="card-title">${name}</h5>`;
        html += '</div>';
        html += '<ul class="list-group list-group-flush">';
        html += `<li class="list-group-item"><strong>UserName: </strong>${username}</li>`;
        html += `<li class="list-group-item"><strong>Eamil: </strong>${email}</li>`;
        html += `<li class="list-group-item"><strong>Address: </strong>${addressAux}</li>`;
        html += `<li class="list-group-item"><strong>Phone: </strong>${phone}</li>`;
        html += `<li class="list-group-item"><strong>Web Site: </strong>${website}</li>`;
        html += `<li class="list-group-item"><strong>Company: </strong>${companyAux}</li>`;
        html += '</ul>'
        html += '</div>'
    });
        

    containerData.innerHTML=html;

}

getAPI(url);