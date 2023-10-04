const size = 50

function rellenoManual() {
    var arrayGrande = new Array(size);

    for(let i= 0; i <arrayGrande.length; i++) {

        arrayGrande[i] = 0;
    }

    return arrayGrande
}

function rellenoAutomatico(){
    let arrayGrande = new Array(size);

    arrayGrande.fill(0)
    
    return arrayGrande
}

console.log(rellenoManual());
console.log(rellenoAutomatico());