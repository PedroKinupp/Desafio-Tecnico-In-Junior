function fatorial(number){
    let resultado=1;
    while(number>1){
        resultado*=number;
        number--;
    }
    return resultado
}