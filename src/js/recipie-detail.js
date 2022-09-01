
//Esto sirve para ejecutar la petición cuando la pagina carga
function init() {
    const mealID = location.search.substring(4);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then(res => res.json())
    .then(data => {
      const meal = data.meals[0];

      addMealToDOM(meal);
    });
}
init()

//Para renderizar el contenido de la peticion
const singleIngredient = document.getElementById('single-ingredient');

function addMealToDOM(meal) {
  const ingredients = [];

  for (let i = 1; i <=10; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }
  singleIngredient.innerHTML= `
    <ul>
      ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
    </ul>`;


    const recipieImage = document.getElementById('recipie-image');
    const category = document.getElementById('category');
    const area = document.getElementById('area')
    const recipieTitle = document.getElementById('recipie-title');
    const  recipieInstructions= document.getElementById('recipie-instructions');

    recipieImage.src = meal.strMealThumb;
    category.innerText = meal.strCategory;
    area.innerText = meal.strArea;
    recipieTitle.innerText = meal.strMeal;
    recipieInstructions.innerText = meal.strInstructions;

}
