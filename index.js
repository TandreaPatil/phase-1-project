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
    randomBrewLink().addEventListener("click", renderRandomBrewPage);

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

function renderRandomBrewPage() {
    resetMainDiv();

    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    h1.innerText = "Random Brew Page"
    p.innerText = "Here's a suggestion that I think you'd love!"

    mainDiv().appendChild(h1)
    mainDiv().appendChild(p)
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