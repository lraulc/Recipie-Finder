let aux = localStorage.getItem("key1")
console.log(aux)

//======= variables para url
let url_ingre = "https://www.themealdb.com/api/json/v1/1/filter.php?i="
let completeUrl = url_ingre + aux
console.log(completeUrl)
// === variables para manipular el resultado
let nameRecipie = []
let UrlRecipieimg = []
let idRecipe = []

let idSearch = document.getElementById("search")
idSearch.removeChild(idSearch.lastChild)
idSearch.appendChild(CreateNode("strong", aux))


getdata(completeUrl)
  .then(data => {

    let resp = managedata(data)  /// Revisa que el resultado tenga al menos un valor como respuesta
    let IdContainerMain = document.getElementById("idcontainer1")
    let childesContainer = IdContainerMain.childNodes
    let Btn_contenedor = document.getElementsByClassName('contenedorBoton')
    
    let IdNumRecipie = document.getElementById("results")


    if (resp == "error") {
      IdContainerMain.style.display = "none"
      IdContainerMain.parentNode.appendChild(CreateNode('h1', 'Elemento no encontrado'))
      return
    }
    // coloca el numero de recetas encontradas
    let numResults = nameRecipie.length.toString() + " recipies"
    
    IdNumRecipie.removeChild(IdNumRecipie.lastChild)
    IdNumRecipie.appendChild(CreateNode("strong",numResults))

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
        if(ChildBtn[g].href=!undefined){
          ChildBtn[g].href = "/recipie-detail.html?id="+idRecipe[j]
          console.log(ChildBtn[g].href)
        }
        
      }
      
    }
      
    
    

  }


  )

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
async function getdata(completeUrl) {
  try {

    return fetch(completeUrl)
      .then(function (response) {
        if (response.status == 404) {
          return ('error')
        } else {
          console.log('===')

          return response.json();
        }
      })
      .then(function (data) {
        console.log('obt data')
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
      nameRecipie.push(element.strMeal)
      UrlRecipieimg.push(element.strMealThumb)
      idRecipe.push(element.idMeal)
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





