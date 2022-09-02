import "../SCSS/styles.scss";
import "./recipie-detail";

//Funcion para esconder footer cuando detecta teclado en el celular
const footer = document.querySelector("footer");

window.addEventListener("resize", (e) => {
    if (window.innerHeight > 720) {
        footer.style.visibility = "visible";
    } else {
        footer.style.visibility = "hidden";
    }
});

//Declaro algunas variables
const random = document.getElementById("random");
const searchBtn = document.getElementById("search-btn");

//Funcion para buscar receta
function searchRecipie() {
    const inputSearch = document.getElementById("search-input");
    window.location.href = `/recipies.html?s=${inputSearch.value}`;
}

//Funcion para traer receta random
function getRandomMeal() {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then((res) => res.json())
        .then((data) => {
            const meal = data.meals[0];
            window.location.href = `/recipie-detail.html?id=${meal.idMeal}`;
        });
}
//Agregamos Event Listeners
random
    .addEventListener("click", getRandomMeal)
    .then((res) => res.json())
    .then((data) => {
        const meal = data.meals[0];
        window.location.href = `/recipie-detail.html?id=${meal.idMeal}`;
    });
//Agregamos Event Listeners
random.addEventListener("click", getRandomMeal);
searchBtn.addEventListener("click", searchRecipie);
