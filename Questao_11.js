let n = prompt("Quantos numeros deseja inserir no vetor?")
let vetor = []
for(let i = 0 ; i<n ; i++){
    vetor.push(prompt(`Digite o ${i+1}* número inteiro`))
}

let counter = 0
for(let i = 0 ; i<vetor.length-1 ; i++){
    if(vetor[i+1]>vetor[i]) counter ++;
}
console.log(vetor)
console.log(counter)
