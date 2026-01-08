let text = prompt("Digite uma frase")
let frase = text.toLowerCase().split("")

//retirando os espaços
frase.forEach((element, indice, frase) => {
    if(element==" "){
        frase.splice(indice,1)
    }
})

console.log(frase)