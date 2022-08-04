alert("Bem vindo piloto")
let initialVelocity = 0
let namePilot = prompt("Informe seu nome: ")
let optionVelocity = prompt("Qual velocidade você deseja: ")
let confirmatioVelocity = confirm("Deseja essa velocidade: " + optionVelocity +" ?")
if(confirmatioVelocity == true){
    initialVelocity = optionVelocity
}
else if (confirmatioVelocity == false){
    let optionVelocity = prompt("Escolha novamente a velocidade:")
    initialVelocity = optionVelocity
}
if(initialVelocity <= 0){
    alert("Nave parada, acelere!")
}
else if(initialVelocity < 40){
    alert("Você está devagar, podemos aumentar!")
}
else if(initialVelocity > 80){
    alert("Velocidade alta, finalizando")
}
alert("Piloto: "+ namePilot + "\nVelocidade: " + initialVelocity)