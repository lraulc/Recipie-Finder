//Ubicamos los params de búsqueda de la API
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('s');

//Funcion para obtener las recetas con ingrediente principal
function getRecepies() {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${myParam}`)
    .then(res => res.json())
    .then(data => {
        const meal = data.meals;
        console.log(meal) 
    })

}
getRecepies()