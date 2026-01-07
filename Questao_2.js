function fatorial(number){
    if(number<0 || number%1!=0) return -1;
    let resultado=1;
    while(number>1){
        resultado*=number;
        number--;
    }
    return "Fatorial: " + resultado;
}

let queroCalcular=true;
while(queroCalcular){
    number=prompt("digite um número para calcular seu fatorial");
    if(fatorial(number)==-1) console.log("Número inválido. digite outro número");
    else{
        console.log(fatorial(number));
        let confirmacao = prompt("Deseja calcular outro número? (S) ou (N)");
        if(confirmacao=='S' || confirmacao=='s') queroCalcular = true;
        else if(confirmacao=='N' || confirmacao=='n') queroCalcular = false;
        else queroCalcular = false
    }
}