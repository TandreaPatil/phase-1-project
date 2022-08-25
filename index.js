/* Homepagge loaded when logo is clicked. 
Will display homepage */

// Node
const mainDiv = () => document.getElementById("main");
const yummyBeerListLink = () => document.getElementById("yummy-beer-list-link");
const homePageLink = () => document.getElementById("home-page-link");
const randomBrewLink = () => document.getElementById("random-brew-link");

let brews = [];

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


    h1.innerText = "U.B.S. Homepage"
    p.innerText = "We know... you've had a long, tough day at work. The last thing you should be responsible for after punching the clock is choosing a beer from a confusing menu at the local brewery. Sit back and relax while we choose your next cold one!"

    mainDiv().appendChild(h1);
    mainDiv().appendChild(p);
}

function renderYummyBeerListPage() {
    resetMainDiv();

    const h1 = document.createElement("h1"); 

    h1.innerText = "Yummy Beer List Page"

    mainDiv().appendChild(h1)
    renderBrews()
}   

const renderBrews = () => {
    const ul = document.createElement("ul");
    brews.forEach(brew => renderBrew(brew, ul))
    mainDiv().appendChild(ul)
}

const renderBrew = (brew, ul) => {
    const li = document.createElement("li");
    li.innerText = brew.brew
    ul.appendChild(li);

}

function renderRandomBrewPage(brew) {
    resetMainDiv();

    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const btn = document.createElement("button");

    h1.innerText = "Random Brew Page"
    p.innerText = brew;

    btn.innerText = "Click here to show this brew some love!"

    btn.className = "btn";

    btn.addEventListener("click", () => favoriteBrew(brew))

    mainDiv().appendChild(h1)
    mainDiv().appendChild(p)
    mainDiv().appendChild(btn)
}

const fetchRandomBrew = () => {
    fetch("https://api.punkapi.com/v2/beers/random")
    .then(resp => resp.json())
    .then(data => {
        renderRandomBrewPage(data[0].name);
    })
}

const fecthYummyBeerList = () => {
    fetch("http://localhost:3000/favorites")
    .then(resp => resp.json())
    .then(data => brews = data);
}

const favoriteBrew = brew => {
    fetch("http://localhost:3000/favorites", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ brew: brew })
    })
        .then(resp => resp.json())
        .then(data => {
          brews.push(data);
          renderYummyBeerListPage()
        })
}

// Helpers
function resetMainDiv() {
    mainDiv().innerHTML = ""
}

//DOM CONTENT LOADED
document.addEventListener("DOMContentLoaded", () => {
  renderHomePage (); 
  fecthYummyBeerList();
  attachYummyBeerListClickEvent();
  attachHomePageClickEvent();
  attachRandomBrewClickEvent();
})