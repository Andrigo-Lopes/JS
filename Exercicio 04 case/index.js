alert("Bem Vindo")
let distancia = prompt("Digite a distancia em anos luz: ")
alert("1-Parsec(PA) \n2-Unidade Astronomica(UA) \n3-Quilometros(KM)")
let option = prompt("Escolha a opção:")
switch(option){
    case "1":
        alert("Distancia: " + distancia + "\nOpção selecionada: Parsec")
        alert("Conversão :" + distancia*0,306601)
    break
    case "2":
        alert("Distancia: " + distancia + "\nOpção selecionada: Unidade Antronomica")
        alert("Conversão: " + distancia*63241,1)
    break
    case "3":
        alert("Distancia: " + distancia + "\nOpção selecionada: Quilometros")
        alert("Conversão :" + distancia*9,5*Math.pow(10,12))
    break
default:
        alert("Distancia em anos luz: " + distancia)
        alert("Opção fora do escopo!")
}

