const size = 50

function rellenoManual() {
    var arrayGrande = [];

    for(let i= 0; i <50; i++) {

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