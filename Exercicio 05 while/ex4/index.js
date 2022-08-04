alert("Informe dois valores: ")
let a = prompt("Valor de A: ")
let b = prompt("Valor de B: ")
let option = undefined
while(option != "5"){
    option = prompt("1-Soma \n2-Multiplicação \n3-Maior numero \n4-Novos numeros \n5-Sair do programa")
    if(option == "1"){
        alert(Number(a)+Number(b))
    }
    else if(option == "2"){
        alert(Number(a)*Number(b))
    }
    else if(option == "3"){
        if(a>b){
            alert("Maior A: " + a)
        }
        else if(b>a){
            alert("Maior B: " + b)
        }
    }
    else if(option == "4"){
        alert("Novos numeros: ")
        a = prompt("Informe o novo valor A: ")
        b = prompt("Informe o novo valor B: ")
    } 
}
alert("Finalizando")
