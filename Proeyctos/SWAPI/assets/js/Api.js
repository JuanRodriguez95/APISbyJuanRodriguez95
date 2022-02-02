let containerData = document.getElementById('container-data');

const API = 'https://swapi.dev/api/people/';

const getAPI = (url) =>{
    let personaje = Math.floor(Math.random() * (82 - 1)) + 1;
    url+=personaje;
    console.log(url);
    return fetch(url)
        .then((response) => response.json())
        .then((result)=>{
            showData(result);
        })
    }


const showData = (data)  =>{
    let html = "";
    let {name,height,mass,hair_color,skin_color,eye_color,birth_year,gender,created,edited} = data;
    html += '<div class="card bg-dark text-white m-4 " style="width: 18rem;">'
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${name}</h5>`;
    html += '</div>';
    html += '<ul class="list-group list-group-flush">';
    html += `<li class="list-group-item"><strong>Height: </strong>${height}</li>`;
    html += `<li class="list-group-item"><strong>Mass: </strong>${mass}</li>`;
    html += `<li class="list-group-item"><strong>Hair Color: </strong>${hair_color}</li>`;
    html += `<li class="list-group-item"><strong>Skin Color: </strong>${skin_color}</li>`;
    html += `<li class="list-group-item"><strong>Eye Color: </strong>${eye_color}</li>`;
    html += `<li class="list-group-item"><strong>Birth Year: </strong>${birth_year}</li>`;
    html += `<li class="list-group-item"><strong>Gender: </strong>${gender}</li>`;
    html += `<li class="list-group-item"><strong>Created: </strong>${created}</li>`;
    html += `<li class="list-group-item"><strong>Edited: </strong>${edited}</li>`;
    html += '</ul>'
    html += '</div>'

    containerData.innerHTML=html;

}

getAPI(API);