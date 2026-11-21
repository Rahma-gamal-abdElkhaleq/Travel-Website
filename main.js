
let countries = [
    {
        capital: "Cairo",
        nameOfCountry: "EGYPT",
        description: "Cairo is a historic city known for its ancient Egyptian civilization and famous landmarks.",
        continent: "Africa",
        famousFood: "Koshari, Foul",
        famousPlace: "Pyramids",
        language: "Arabic",
        image: "./images/Cairo.jpg"
    },
    {
        capital: "Paris",
        nameOfCountry: "FRANCE",
        description: "Paris is one of the most beautiful cities in the world, famous for its art, architecture and romantic atmosphere.",
        continent: "Europe",
        famousFood: "Croissant, Macarons",
        famousPlace: "Eiffel Tower",
        language: "French",
        image: "./images/Parise.jpeg"
    },
    {
        capital: "Tokyo",
        nameOfCountry: "JAPAN",
        description: "Tokyo is a modern city that combines advanced technology with traditional Japanese culture.",
        continent: "Asia",
        famousFood: "Sushi, Ramen",
        famousPlace: "Tokyo Tower",
        language: "Japanese",
        image: "./images/Tokyo.jpeg"
    },
    {
        capital: "Rome",
        nameOfCountry: "ITALY",
        description: "Rome is famous for its ancient history, beautiful architecture and delicious Italian food.",
        continent: "Europe",
        famousFood: "Pizza, Pasta",
        famousPlace: "Colosseum",
        language: "Italian",
        image: "./images/Roma.jpg"
    }
];




// Select Card Elements

const counter = document.querySelector(".destination-counter");

const countryName = document.querySelector(".country-name");

const capitalName = document.querySelector(".capital-name");

const description = document.querySelector(".destination-description");

const continent = document.querySelector(".continent-value");

const famousFood = document.querySelector(".famous-food-value");

const famousPlace = document.querySelector(".famous-place-value");

const language = document.querySelector(".language-value");

const destinationImage = document.querySelector(".destination-image");

const destinationNumber = document.querySelector(".destination-number");
const prev = document.querySelector(".prev");
const next = document.getElementById("next")
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;
function UpdateCountry(){
let CurrentCountry=countries[currentIndex];
counter.textContent=`${currentIndex +1}/4`
countryName.textContent=CurrentCountry.nameOfCountry;
capitalName.textContent=CurrentCountry.capital;
description.textContent=CurrentCountry.description;
continent.textContent=CurrentCountry.continent;
famousFood.textContent=CurrentCountry.famousFood;
language.textContent=CurrentCountry.language;
destinationImage.src=CurrentCountry.image;
destinationNumber.textContent=`0 ${currentIndex +1}`;
updateDots();
}
next.addEventListener("click", function(){
 currentIndex ++;
 if(currentIndex >= countries.length){
    currentIndex=0
 }
 UpdateCountry()

})
UpdateCountry()

prev.addEventListener("click", function(){
 currentIndex --;
 if(currentIndex <0){
    currentIndex=countries.length-1;
 }
 UpdateCountry()

})

function updateDots() {
    dots.forEach(function(dot, index) {
        dot.classList.remove("active");

        if(index === currentIndex) {
            dot.classList.add("active");
        }
    });
}
dots.forEach(function(dot, index) {

    dot.addEventListener("click", function() {
        currentIndex = index;
        UpdateCountry();
    });

});
