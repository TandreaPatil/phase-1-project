/* Homepagge loaded when logo is clicked. 
Will display homepage */

// Node
const mainDiv = () => document.getElementById("main");
const pizzaFlavorListLink = () => document.getElementById("pizza-flavor-list-link");

// Event Listeners
function attachPizzaFlavorListClickEvent() {
    pizzaFlavorListLink().addEventListener("click", renderPizzaFlavorListPage);
}

// Event Handlers
function renderHomePage() {
    resetMainDiv();

    const h1 = document.createElement("h1");
    const p = document.createElement("p");


    h1.innerText = "Pizza Party Planner Homepage"
    h1.style.marginTop = "0"
    p.innerText = "Lorem ipsum dolor..."

    mainDiv().appendChild(h1);
    mainDiv().appendChild(p);
}

function renderPizzaFlavorListPage() {
    resetMainDiv();

    const h1 = document.createElement("h1");
    const ul = document.createElement("ul"); 
    const li = document.createElement("li");
e\

    h1.innerText = "Pizza Flavor List Page"
    h1.style.marginTop = "0"

    li.innerText = "So many different flavors to choose from!"

    ul.appendChild(li);

    mainDiv().appendChild(ul)
}

// Helpers
function resetMainDiv() {
    mainDiv().innerHTML = ""
}

//DOM CONTENT LOADED
document.addEventListener("DOMContentLoaded", () => {
  renderHomePage (); 
  attachPizzaFlavorListClickEvent();
})