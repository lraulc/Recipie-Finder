let aux= localStorage.getItem("key1")
console.log(aux)
console.log("test")

let url_ingre = "https://www.themealdb.com/api/json/v1/1/filter.php?i="
let completeUrl = url_ingre + aux
console.log(completeUrl)

fetch(completeUrl)
  .then(function (response) {
    if (response.status==404){
        console.log('error')
    }else{
        console.log('===')
        console.log(response)
    }
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })

