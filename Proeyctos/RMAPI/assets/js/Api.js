let API = 'https://rickandmortyapi.com/api/character';
let characters = document.getElementById("characters");
let next = document.getElementById('btn-next');
let previus = document.getElementById('btn-prev');
let actual = document.getElementById('actual-pagination');
let paginationPage = document.getElementById("pagination");
let dataRef = [];

const getAPI = (url) =>{
    return fetch(url)
            .then((response)=> response.json())
            .then((json)=>{
                fillData(json.results),
                pagination(json.info);
            })
            .catch((error)=>{
                console.log("Error in the API");
            })
}

const fillData = (data) =>{
    dataRef=data;
    let json = data;
    let item = " ";
    json.forEach(character => {
        let {id , name , status ,species, gender,type, image}=character;
        item += '<div class="card bg-secondary text-white " style="width:18rem;">';
        item += `<div class="card-header text-center"><h5>${name}</h5></div>`;
        item +=`<img class=image src=${image} alt="..." >`;
        item +='<div class="description ">'
        item +=`<p class="card-text "><strong>Species:</strong> ${species}</p>`;
        item +=`<p class="card-text "><strong>Gender:</strong> ${gender}</p>`;
        item +=`<p class="card-text "><strong>Status:</strong> ${status}</p>`;
        item +='</div>';
        item +='</div>';
    });
    characters.innerHTML=item;
};

const pagination = (info) =>{
    console.log('entre a pagination');
    let prevDisabled=" ";
    let nextDisabled=" ";
    let html ="";
 
    console.log('entre a inner');

    html += `<li class="page-item ${info.prev == null ? "disabled" : " "} m-3">
          <button id="btn-prev" class="page-link" aria-label="Previous" onclick="getAPI('${info.prev}')">Prev</button>
        </li>`;

    html += `<li class="page-item ${info.next == null ? "disabled" : " "} m-3">
        <button id="btn-prev" class="page-link" aria-label="Previous" onclick="getAPI('${info.next}')">Next</button>
      </li>`;

      console.log('pase al inner de pagination');
      paginationPage.innerHTML =html;
};


getAPI(API);



