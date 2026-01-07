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