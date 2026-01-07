function fatorial(number){
    if(number<0 || number%1!=0) return "número inválido"
    let resultado=1;
    while(number>1){
        resultado*=number;
        number--;
    }
    return "fatorial: " + resultado
}