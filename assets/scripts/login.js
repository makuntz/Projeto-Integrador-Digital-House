

/* campo do telefone */
const telefone = document.getElementById( "telefone" ); 


/* aciona quando for digitado no campo */
telefone.addEventListener( "keypress", ( el ) => mask( el.target.value ) );


/* aciona quando autocompletado o campo */
telefone.addEventListener( "change", ( el ) => mask( el.target.value ) ); 

const mask = ( v ) => {
    v = v.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
    v = v.replace(/(\d)(\d{4})$/, "$1-$2");
    telefone.value = v;              /* Insere o(s) valor(es) no campo */
};


var telef = "13991486078";

const rgx = /^(\d{2})(\d{5})(\d{4})/;
const sbst = "($1) $2-$3";
const tele = telef.replace( rgx, sbst ); 

console.log(
        `regex: ${rgx} \n`,
        `sbst: "${sbst}" \n`,
        `tele: ${tele} \n`,
        `telef.replace( rgx, sbst ): ${telef.replace( /^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3" )} \n`,
        `---------------------------------------------------`
    );