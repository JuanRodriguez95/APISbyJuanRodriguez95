let API = "https://pokeapi.co/api/v2/pokemon?limit=50";
let urlAux = "https://pokeapi.co/api/v2/pokemon/";
let characters = document.getElementById("characters");

let paginationPage = document.getElementById("pagination")

const getAPI = (url) => {
  console.log(url);
  return fetch(url)
    .then((response) => response.json())
    .then((result) => {
      getAPIV2(result.results);
      pagination(result.next,result.previous);
    })
    .catch((error) => {
      console.log(error);
    });
};

const getAPIV2 = (data) => {
  let contador =0;
  data.forEach((obj) => {
    const { name, url } = obj;
    fetch(url)
      .then((response) => {
        contador++;
        console.log(contador);
        return response.json();
      })
      .then((result) => {
        pushData(result);
      });
  });
  characters.innerHTML="";
};

let data2 = [];

let pushData = (obj) => {
  let objeto = {
    name: obj.name,
    height: obj.height,
    weight: obj.weight,
    url: obj.sprites.other.dream_world.front_default,
  };
  fillData(objeto);
};

let fillData = (pokemon) => {
  let item = "";
  const { name, url, height, weight } = pokemon;
  item +=
    '<div class="card bg-secondary text-white mb-3" style="width:18rem;">';
  item += `<div class="card-header text-center"><h5>${name}</h5></div>`;
  item += `<img class=image  src=${url} alt="..." >`;
  item += '<div class="description ">';
  item += `<p class="card-text "><strong>Height:</strong> ${height}</p>`;
  item += `<p class="card-text "><strong>Weight:</strong> ${weight}</p>`;
  item += "</div>";
  item += "</div>";
  characters.innerHTML += item;
};


const pagination = (next,prev) =>{
  let html ="";
  html += `<li class="page-item ${prev == null ? "disabled" : " "} m-3">
        <button id="btn-prev" class="page-link" aria-label="Previous" onclick="getAPI('${prev}')">Prev</button>
      </li>`;

  html += `<li class="page-item ${next == null ? "disabled" : " "} m-3">
      <button id="btn-prev" class="page-link" aria-label="Previous" onclick="getAPI('${next}')">Next</button>
    </li>`;
    paginationPage.innerHTML =html;
};


getAPI(API);


