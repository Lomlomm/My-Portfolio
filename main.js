
var kiubixSideBar = document.getElementById('kiubix')
kiubixButton = document.getElementById('kiubix-btn')
kiubixButton.addEventListener("click", ()=>{
    if(kiubixSideBar.style.display === "none"){
        kiubixSideBar.style.display = "block";
    } else{
        kiubixSideBar.style.display = "none";
    }

})
    
