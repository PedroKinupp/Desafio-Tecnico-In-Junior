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

adicionarJogador("Pedro", 19, "Atacante", 67)
adicionarJogador("João", 67, "Goleiro", 25)
adicionarJogador("Ana", 20, "Atacante", 80)
listarTime()
console.log(calcularPontuacaoMedia())
console.log(buscarPorPosicao("Atacante"))
console.log(time)