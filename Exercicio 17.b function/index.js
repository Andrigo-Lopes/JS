let a = Number(prompt("Valor de A: "))
let b = Number(prompt("Valor de B: "))
let menuOption = prompt ("Escolha sua opção: \n1-Adição \n2-Subtração \n3-Multiplicação \n4-Divisão")
switch(menuOption){
    case "1":{
        adição()
        break
    }
    case "2":{
        Subtração()
        break
    }
    case "3":{
        Multiplicação()
        break
    }
    case "4":{
        Divisão()
        break
    }
    default:
        alert("Nenhuma opção")
}
function adição(){
   let soma = a + b
   alert("A soma dos valores: " + soma)
}
function Subtração(){
    let calculo = Math.max(a,b)
}
function Multiplicação(){
    let vezes = a * b
    alert("A multiplicação dos valores é: " + vezes)
}
function Divisão(){
    let dividir = a / b 
    alert("A divisão dos valores é : " + dividir)
}