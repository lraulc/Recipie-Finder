
if (typeof(Storage) !== "undefined") {
    console.log("test")// LocalStorage disponible
} else {
    // LocalStorage no soportado en este navegador
}
let btnSearch = document.getElementById("btn_search")

let wordSearch = 'test'
btnSearch =addEventListener("click",function(event){
    
    wordSearch = document.getElementById("in_index").value
    localStorage.setItem("key1",wordSearch)
    
    
    
})



