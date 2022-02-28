var listener = false; 
    
function openNavDrawer() {
        
	if( !listener ) {
		document.getElementById( "card-l-container" ).style.visibility = "visible";
		document.getElementById( "card-l" ).style.height = "";
		document.getElementById( "card-l" ).style.minHeight = "500px";
		document.getElementById( "card-l" ).style.transition = ".5s";
            
		listener = true;
	} else if( listener ) {
		document.getElementById( "card-l-container" ).style.visibility = "hidden";
		document.getElementById( "card-l" ).style.height = "";
		document.getElementById( "card-l" ).style.minHeight = "0px";
		document.getElementById( "card-l" ).style.transition = ".4s";
            
		listener = false;
	}
        
}

function closeNavDrawer() {

	if( listener ) {
		document.getElementById( "card-l-container" ).style.visibility = "hidden";
		document.getElementById( "card-l" ).style.height = "0px";
		document.getElementById( "card-l" ).style.minHeight = "0px";
		document.getElementById( "card-l" ).style.transition = ".4s";
            
		listener = false;
	}
} 