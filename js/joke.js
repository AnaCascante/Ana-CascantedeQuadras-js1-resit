const jokesContainer = document.querySelector(".joke");
const showhideBtn = document.getElementById("showhideBtn");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");


const url = "https://api.noroff.dev/api/v1/jokes/" + id;


async function getJoke(url){
    const response = await fetch(url);
    const joke = await response.json();

    jokesContainer.innerHTML = `<div class="details-type"><h2>Joke type: ${joke.type}</h2></div>
    <h2>${joke.setup}</h2>   
    <div class="details-punchline" id="x" style="display:none;"><h3>${joke.punchline}</h3></div>`;

    
}

getJoke(url);

showhideBtn.onclick = function(e) {
    var x = document.getElementById('x');
    if(x.style.display == 'none')
        x.style.display = 'block';
    else
        x.style.display = 'none';
}





/*const resultContainer = document.querySelector(".joke");
const button = document.getElementById("hide-showbtn");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");


const url = "https://api.noroff.dev/api/v1/jokes/" + id;


async function getJoke(url){
    const response = await fetch(url);
    const joke = await response.json();

    resultContainer.innerHTML = `<h1>${joke.setup}</h1>
    <div class="details-type"><h2>Joke type: ${joke.type}</h2></div>
    <div class="details-setup"><h3>${joke.setup}</h3></div>
    <div class="details-punchline" id="x" style="display:none;"><h3>${joke.punchline}</h3></div>`;

    
}

getJoke(url);

button.onclick = function(e) {
    var x = document.getElementById('x');
    if(x.style.display == 'none')
        x.style.display = 'block';
    else
        x.style.display = 'none';
}*/