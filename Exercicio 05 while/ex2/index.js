alert("Acerte o numero entre 1500 a 1700:")
let cpuNumber = 1555
let tentativas = 0
let escolaUsuario = 0
while(escolaUsuario != cpuNumber){
    escolaUsuario = prompt("Digite um numero: ")
    tentativas++
    if(escolaUsuario > 1556 && escolaUsuario < 1580 ){
        alert("mais pra baixo")
    }
    else if(escolaUsuario > 1600 && escolaUsuario < 1700 ){
        alert("pra baixo")
    }
    else if(escolaUsuario > 1400 && escolaUsuario < 1500){
        alert("pra cima")
    }
    else if(escolaUsuario > 1525 && escolaUsuario < 1554){
        alert("mais pra cima")
    }
}
alert("Numero da cpu: " + cpuNumber + "\nNumero escolhido: " + escolaUsuario + "\nTentativas: "+ tentativas)