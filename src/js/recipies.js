// <<<<<<< HEAD
// //Ubicamos los params de búsqueda de la API
// const urlParams = new URLSearchParams(window.location.search);
// const myParam = urlParams.get('s');

// //Funcion para obtener las recetas con ingrediente principal
// function getRecepies() {
//     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${myParam}`)
//     .then(res => res.json())
//     .then(data => {
//         const meal = data.meals;
//         console.log(meal) 
//     })

// }
// getRecepies()
// =======

// let aux = localStorage.getItem("key1")
// console.log(aux)

const mealIDRecipie = location.search.substring(4);



//========
let aux = mealIDRecipie

//======= variables para url
let url_ingre = "https://www.themealdb.com/api/json/v1/1/filter.php?i="
let UrlDetails = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="
let completeUrl = url_ingre + aux
console.log(completeUrl)
// === variables para manipular el resultado
let nameRecipie = []
let UrlRecipieimg = []
let idRecipe = []
let RecipieCategory = []
let RecipieArea = []
let recipieInsts = []




getdata(completeUrl)
  .then(data => {
    let idSearch = document.getElementById("search")
    idSearch.removeChild(idSearch.lastChild)
    idSearch.appendChild(CreateNode("strong", aux))
    let resp = managedata(data)  /// Revisa que el resultado tenga al menos un valor como respuesta
    // Vairables DOM
    let IdContainerMain = document.getElementById("idcontainer1")
    let childesContainer = IdContainerMain.childNodes
    let Btn_contenedor = document.getElementsByClassName('contenedorBoton')
    let IdNumRecipie = document.getElementById("results")
    let numResults = "0"
    let cat1 = document.getElementsByClassName("cat1")
    let cat2 = document.getElementsByClassName("cat2")
    let parrafo = document.getElementsByClassName("parrafo")

    // convierte el numero de recetas
    if (resp != ("error" || null)) {
      numResults = nameRecipie.length.toString() + " recipies"
      IdNumRecipie.removeChild(IdNumRecipie.lastChild)
      IdNumRecipie.appendChild(CreateNode("strong", numResults))
    }
    else {
      numResults = numResults + " recipies"
      IdNumRecipie.removeChild(IdNumRecipie.lastChild)
    IdNumRecipie.appendChild(CreateNode("strong", numResults))
    }
    


    // Accion si la respuesta es un error
    if (resp == "error") {
      console.log("testing...")
      IdContainerMain.style.display = "none"
      IdContainerMain.parentNode.appendChild(CreateNode('h1', 'Elemento no encontrado'))

      return
    }

    console.log("testing...1")

    for (let i = 0; i < childesContainer.length; i++) {

      ModifCard(childesContainer[i], 0)

    }
    if (nameRecipie.length > 1) {
      for (let h = 1; h < nameRecipie.length; h++) {
        let dupnode = IdContainerMain.cloneNode(true)
        IdContainerMain.parentNode.appendChild(dupnode)
        let nwChilds = IdContainerMain.parentNode.lastChild.childNodes

        for (let g = 0; g < nwChilds.length; g++) {

          ModifCard(nwChilds[g], h)

        }

      }
    }
    for (let j = 0; j < (Btn_contenedor.length - 1); j++) {
      let ChildBtn = Btn_contenedor[j].childNodes
      for (let g = 0; g < ChildBtn.length; g++) {
        if (ChildBtn[g].href = !undefined) {
          ChildBtn[g].href = "/recipie-detail.html?id=" + idRecipe[j]
          //console.log(ChildBtn[g].href)
        }

      }

    }

    for (let k = 0; k < idRecipe.length; k++) {
      
      let UrlDetailComplete = UrlDetails + idRecipe[k]
      
      getdata(UrlDetailComplete)
        .then(detailsData => {
          let propArea = detailsData.meals[0].strArea
          let propCat = detailsData.meals[0].strCategory
          let propSumary = detailsData.meals[0].strInstructions
          let cutsumary = propSumary.slice(0,250) + "..."
          console.log(cutsumary)      
          cat1[k].removeChild(cat1[k].lastChild)
          cat1[k].appendChild(document.createTextNode(propArea)) 
           
          cat2[k].removeChild(cat2[k].lastChild)
          cat2[k].appendChild(document.createTextNode(propCat))

          parrafo[k].removeChild(parrafo[k].lastChild)
          parrafo[k].appendChild(document.createTextNode(cutsumary))
      })
      
      

    }


  });
    
    
    

  

// funcion principal

function managedata(data) {
  console.log(data.meals)
  if (data.meals != null) {
    return objToArray(data.meals)
  } else {

    return "error"
  }



  //console.log(nameRecipie)
  //console.log(UrlRecipieimg)
}

//// === funciones 
function getdata(completeUrl) {
  try {

    return fetch(completeUrl)
      .then(function (response) {
        if (response.status == 404) {
          return ('error')
        } else {
          //console.log('===')

          return response.json();
        }
      })
      .then(function (data) {
        //console.log('obt data')
        return data;
      })
  }
  catch {
    console.log(error)
  }
}

function objToArray(arrayData) {
  if (arrayData.length != 0) {
    arrayData.forEach(element => {
      if (typeof (element.strMeal) == "string") { nameRecipie.push(element.strMeal) }
      if (typeof (element.strMealThumb) == "string") { UrlRecipieimg.push(element.strMealThumb) }
      if (typeof (element.idMeal) == "string") { idRecipe.push(element.idMeal) }
      if (typeof (element.strCategory) == "string") { RecipieCategory.push(element.strCategory) }
     
      if (typeof (element.strArea) == "string") { RecipieArea.push(element.strArea) }
      //if (typeof (element.strInstructions) == "string") { recipieInsts.push(element.strInstructions.slice(0,20)) }
    })
  } else {
    console.log('Error')
  };
  ;
}

// funcion 
function CreateNode(element, text) {
  let node = document.createElement(element)
  let textnode = document.createTextNode(text)
  return node.appendChild(textnode)


}

function ModifCard(childnode, j) {
  if (childnode.className == "javaScript") {
    childnode.appendChild(document.createTextNode(nameRecipie[j]))
    childnode.removeChild(childnode.firstChild)

  }
  if (childnode.src != null) {
    childnode.src = UrlRecipieimg[j]

  };


}
