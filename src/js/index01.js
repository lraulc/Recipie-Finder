let btnSearch = document.getElementById("btn_search")

let wordSearch = 'test'
btnSearch.addEventListener("mouseover",function(event){
    wordSearch = document.getElementById("in_index").value
   
    if (wordSearch.length>1){
        btnSearch.href= "./recipies.html"
        
    }else{
        btnSearch.href=""
        
    }
    
})

btnSearch.addEventListener("click",function(event){
    
    localStorage.setItem("key1",wordSearch)
    
    
    
})