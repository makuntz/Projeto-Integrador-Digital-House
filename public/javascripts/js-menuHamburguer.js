let acaoMenuHamburguer = false

function menuHamburguer(){
    
    if ( !acaoMenuHamburguer ) {
        document.getElementById("navMenuMobile").style.width = "100vw";
    
        document.getElementById("navMenuMobile").style.display = "flex";

        acaoMenuHamburguer = true
               
    } else if ( acaoMenuHamburguer ) {
        document.getElementById("navMenuMobile").style.width = "0vw";
    
        document.getElementById("navMenuMobile").style.display = "none";

        acaoMenuHamburguer = false
    }
    
}