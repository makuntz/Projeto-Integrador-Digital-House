
document.querySelector("show-login").addEventListener("click", function(){
	document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click", function(){
	document.querySelector(".popup").classList.remove("active");
})
//popup
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

var obtn = "hidden";

function openForm() {
	//  document.getElementById( "scaffold" ).style.visibility = "visible";
	/*display = "block";*/
            
	if( obtn == "hidden" ) {
		document.getElementById( "scaffold" ).style.visibility = "visible";
		obtn = "visible";
	} else if( obtn == "visible" ) {
		document.getElementById( "scaffold" ).style.visibility = "hidden";
		obtn = "hidden";
	}
}
        
function closeForm() {
	document.getElementById( "scaffold" ).style.display = "none";
}

const telefone = document.getElementById( "telefone" ); // Seletor do campo de telefone

telefone.addEventListener( "keypress", ( el ) => mask( el.target.value ) ); // Dispara quando digitado no campo
telefone.addEventListener( "change", ( el ) => mask( el.target.value ) ); // Dispara quando autocompletado o campo

const mask = ( v ) => {
	v = v.replace( /\D/g, "" );
	v = v.replace( /^(\d{2})(\d)/g, "($1) $2" );
	v = v.replace( /(\d)(\d{4})$/, "$1-$2" );
	telefone.value = v; // Insere o(s) valor(es) no campo
};



function signUpText0() {
	document.getElementById( "sign-upText0" ).style.display = "none";
	document.getElementById( "sign-upText1" ).style.display = "block";
}
function signUpText1() {
	document.getElementById( "sign-upText0" ).style.display = "block";
	document.getElementById( "sign-upText1" ).style.display = "none";
}

function registrar() {
	
	console.log('teste')
}
// var telef = "13991486078";

// const rgx = /^(\d{2})(\d{5})(\d{4})/;
// const sbst = "($1) $2-$3";
// const tele = telef.replace( rgx, sbst ); 

// console.log(
// 	tele,
// 	telef.replace( /^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3" )
// );
    
     
    
