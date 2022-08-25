/* Homepagge loaded when logo is clicked. 
Will display homepage */

// Node
const mainDiv = () => document.getElementById("main");
const yummyBeerListLink = () => document.getElementById("yummy-beer-list-link");
const homePageLink = () => document.getElementById("home-page-link");
const randomBrewLink = () => document.getElementById("random-brew-link");


// Event Listeners
function attachYummyBeerListClickEvent() {
    yummyBeerListLink().addEventListener("click", renderYummyBeerListPage);
}

function attachHomePageClickEvent() {
    homePageLink().addEventListener("click", renderHomePage);
}

function attachRandomBrewClickEvent() {
    randomBrewLink().addEventListener("click", fetchRandomBrew);

} 

// Event Handlers
function renderHomePage() {
    resetMainDiv();

    const h1 = document.createElement("h1");
    const p = document.createElement("p");


    h1.innerText = "Dinner Party Planner Homepage"
    p.innerText = "Lorem ipsum dolor..."

    mainDiv().appendChild(h1);
    mainDiv().appendChild(p);
}

function renderYummyBeerListPage() {
    resetMainDiv();

    const h1 = document.createElement("h1");
    const ul = document.createElement("ul"); 
    const li = document.createElement("li")

    h1.innerText = "Yummy Beer List Page";

    li.innerText = "So many different flavors to choose from!";

    ul.appendChild(li);

    mainDiv().appendChild(h1)
    mainDiv().appendChild(ul)
}

function renderRandomBrewPage(brew) {
    resetMainDiv();

    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    h1.innerText = "Random Brew Page"
    p.innerText = brew;

    mainDiv().appendChild(h1)
    mainDiv().appendChild(p)
}

const fetchRandomBrew = () => {
    fetch("https://api.punkapi.com/v2/beers/random")
    .then(resp => resp.json())
    .then(data => {
        renderRandomBrewPage(data[0].name);
    })
//(data[0].name);
}

// Helpers
function resetMainDiv() {
    mainDiv().innerHTML = ""
}

//DOM CONTENT LOADED
document.addEventListener("DOMContentLoaded", () => {
  renderHomePage (); 
  attachYummyBeerListClickEvent();
  attachHomePageClickEvent();
  attachRandomBrewClickEvent();
})