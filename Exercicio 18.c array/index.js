let option = []
alert("Adicionando valores a lista!")
let quant = prompt("Quantos valores deseja adicionar na lista?")
for(i=0;i<quant;i++){
    menu = prompt("1 Adicionar um item no final da lista \n2 Adicionar um item no inicio da lista \n3 Remover o ultimo item da lista \n4 Remover o primeiro item da lista \n5 Mostrar o indice de um item \n6 Encerrar")

    switch(menu){
        case "1":{
            addListFinal()
            break
        }
        case "2":{
            addListInitial()
            break
        }
        case "3":{
            removedFinal()
        }
        case "4":{
            removedInitial()
            break
        }
        case "5":{
            loc()
            break
        }
        default:
            console.log("ND")
    }
console.log(option)
}
function addListFinal(){
    let addListFinal = prompt("Digite o valor: ")
    option.push(addListFinal)
}

function addListInitial(){
    let addListInitial = prompt("Digite o valor: ")
    option.unshift(addListInitial)
}

function removedInitial(){
    let removedInitial = prompt("Digite o valor: ")
    option.shift(removedInitial)

}

function removedFinal(){
    let removedFinal = prompt("Digite o valor: ")
    option.pop(removedFinal)
}

function loc(){
    let loc = prompt("Digite o valor: ")
    console.log(option.indexOf(loc))
}

