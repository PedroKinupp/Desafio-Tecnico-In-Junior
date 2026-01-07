function verificarIdades(array, ano){
    let idade;
    let maioridades = [];
    array.forEach(element => {
        idade = ano - element
        if(idade >=18){
            maioridades.push("Maior")
        }else maioridades.push("Menor")
    });
    return maioridades
}


let array = [2006,2010,2012,1971,1998]
let ano = prompt("Digite o ano")
let maioridades = verificarIdades(array,ano)
console.log(maioridades)
maioridades.forEach((element,indice) => {
    console.log(`Pessoa ${indice+1}: ${element} de idade`)
})