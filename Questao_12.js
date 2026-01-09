function encontrarElementoUnico(array){
    let aux = [];
    array.forEach(element => {
        let pos = aux.indexOf(element); //posição do elemento no vetor auxiliar
        if(pos == -1) aux.push(element)
        else aux.splice(pos,1)
    })
    return aux[0]
}

console.log(encontrarElementoUnico([1,4,7,1,7,8,4,9,9]))