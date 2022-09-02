let btnSearch = document.getElementById("btn_search")

let wordSearch = 'test'
if(btnSearch){
btnSearch.addEventListener("click",function(event){
    wordSearch = document.getElementById("in_index").value
   
    if (wordSearch.length > 1){
        window.location.href=`./recipies.html?id=${wordSearch}`
    }else{
        btnSearch.href=""
    }
    
})
}
