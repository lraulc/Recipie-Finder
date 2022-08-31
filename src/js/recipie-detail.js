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

function addMealToDOM(meal) {
    const recipieImage = document.getElementById('recipie-image');
    const category = document.getElementById('category');
    recipieImage.src = meal.strMealThumb;
    category.innerText = meal.strCategory;
}
