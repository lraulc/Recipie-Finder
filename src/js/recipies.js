let aux= localStorage.getItem("key1")
console.log(aux)

//======= variables para url
let url_ingre = "https://www.themealdb.com/api/json/v1/1/filter.php?i="
let completeUrl = url_ingre + aux
console.log(completeUrl)
// === variables para manipular el resultado
let nameRecipie = []
let UrlRecipieimg = []

getdata(completeUrl)
  .then(data => {
    console.log(data.meals)
    console.log('resultado')
    console.log('process')
    objToArray(data.meals)
    //console.log(nameRecipie)
    //console.log(UrlRecipieimg)

  }
 )

  
  





  //// === funciones 
async function getdata(completeUrl){
  try{

  return fetch(completeUrl)
  .then(function (response) {
    if (response.status==404){
      return ('error')
    }else{
      console.log('===')
      
      return response.json();
  }})
  .then(function (data) {
    console.log('obt data')
    return data;
  })
}
catch{
  console.log(error)
}
}

function objToArray(arrayData){
  arrayData.forEach(element => {
    nameRecipie.push(element.strMeal)
    UrlRecipieimg.push(element.strMealThumb)
  });
  ;
}

let containerRecipie =  document.getElementById('idcontainer')
console.log(containerRecipie)




