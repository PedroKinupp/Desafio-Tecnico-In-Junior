let text = prompt("Digite uma frase")
let frase = text.toLowerCase().split("")

//retirando os espaços
frase.forEach((element, indice, frase) => {
    if(element==" "){
        frase.splice(indice,1)
    }
})

//verrificando se é palíndromo
let resp = "É palíndromo"
let length = frase.length
for(let i=0 ; i < Math.floor(length/2) ; i++){
    if(frase[i] != frase[-i+length-1]){
        resp = "Não é palíndromo"
        break
    }
}

console.log(resp)