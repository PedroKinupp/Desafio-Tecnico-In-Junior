function verificarIdades(array, ano){
    let idade;
    let maioridade = [];
    array.forEach(element => {
        idade = ano - element
        if(idade >=18){
            maioridade.push("Maior")
        }else maioridade.push("Menor")
    });
    return maioridade
}


let array = [2006,2010,2012,1971,1998]
let ano = prompt("Digite o ano")
let idades = verificarIdades(array,ano)
console.log(idades)