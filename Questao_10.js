let opcao;
let fila = ["Pedro", "João", "Maria", "Ricardo"];
let sendo_atendido;

do{
    console.log("1- Novo cliente")
    console.log("2- Atender cliente")
    console.log("3- Sair")

    console.log("-------------Fila-------------")
    fila.forEach((element, indice) => {
        console.log(`${indice+1}°: ${element}`)
    })

    opcao=prompt("Escolha uma opção:")

    switch(opcao){
        case "1":
            fila.push(prompt("Digite o nome do cliente"))
            break
        case "2":
            sendo_atendido = fila.shift()
            if(sendo_atendido!= undefined) console.log(`Sendo atendido: ${sendo_atendido}`)
            else console.log("Fila vazia")
            break
    }

    console.log("------------------------------")
} while(opcao != "3")