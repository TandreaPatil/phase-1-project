/* Homepagge loaded when logo is clicked. 
Will display homepage */

// Node
const mainDiv = () => document.getElementById("main");
const yummyRecipeListLink = () => document.getElementById("yummy-recipe-list-link");
const homePageLink = () => document.getElementById("home-page-link");
const randomRecipeLink = () => document.getElementById("random-recipe-link");


// Event Listeners
function attachYummyRecipeListClickEvent() {
    yummyRecipeListLink().addEventListener("click", renderYummyRecipeListPage);
}

function attachHomePageClickEvent() {
    homePageLink().addEventListener("click", renderHomePage);
}

function attachRandomRecipeClickEvent() {
    randomRecipeLink().addEventListener("click", renderRandomRecipePage);

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

function renderYummyRecipeListPage() {
    resetMainDiv();

    const h1 = document.createElement("h1");
    const ul = document.createElement("ul"); 
    const li = document.createElement("li")

    h1.innerText = "Yummy Recipe List Page";

    li.innerText = "So many different flavors to choose from!";

    ul.appendChild(li);

    mainDiv().appendChild(h1)
    mainDiv().appendChild(ul)
}

function renderRandomRecipePage() {
    resetMainDiv();

    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    h1.innerText = "Random Recipe Page"
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
  attachYummyRecipeListClickEvent();
  attachHomePageClickEvent();
  attachRandomRecipeClickEvent();
})