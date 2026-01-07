let number = prompt("Digite um número inteiro");
let mensagem = ""
if(number%3==0) mensagem += "fizz"
if(number%5==0) mensagem += "buzz"

if(mensagem!= "") console.log(mensagem) 
