function openSideBar(){

    if(document.getElementById("visible").style.display == "none"){
    document.getElementById("visible").style.display = "flex"
    }
    else{
        document.getElementById("visible").style.display = "none"
    }

    document.querySelectorAll('.side-divs').forEach(el => {
        el.style.display = "none";
        
    });
}

function openSide(i){
    
    document.querySelectorAll('.side-divs').forEach(el => {
        el.style.display = "none";
        
    });

    document.getElementById(i).style.display = "block";
}