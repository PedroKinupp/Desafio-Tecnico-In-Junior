let time = []

function adicionarJogador(
    nome = prompt("Digite o nome"),
    idade = Number(prompt("Digite a idade")),
    posição = prompt("Digite a posição"),
    pontuação = Number(prompt("Digite a pontuação"))){

    let jogador = {}
    jogador.nome = nome
    jogador.idade = idade
    jogador.posição = posição
    jogador.pontuação = pontuação

    time.push(jogador)
}

function buscarPorPosicao(pos = prompt("Qual posição?")){
    let jogadores_dessa_pos = []
    time.forEach(element => {
        if(element.posição == pos) jogadores_dessa_pos.push(element.nome)
    })

    if(jogadores_dessa_pos.length == 0) console.log("Nenhum jogador nessa posição")
    return jogadores_dessa_pos
}

function listarTime(){
    time.forEach(element => {
        console.log(element.nome)
    })
}

function calcularPontuacaoMedia(){
    let media = 0
    time.forEach(element => {
        media += element.pontuação
    })
    return media/time.length
}

let opcao;
do{
    console.log("1- Adicionar jogador")
    console.log("2- Buscar por posição")
    console.log("3- Listar time")
    console.log("4- Calcular pontuação média")
    console.log("5- Sair")

    opcao=prompt("Escolha uma opção:")

    switch(opcao){
        case "1":
            adicionarJogador()
            break
        case "2":
            console.log(buscarPorPosicao())
            break
        case "3":
            listarTime()
            break
        case "4":
            console.log(calcularPontuacaoMedia())
            break
    }
} while(opcao != "5")