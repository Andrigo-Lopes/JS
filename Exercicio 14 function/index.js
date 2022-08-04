let naveName = prompt("Nome da nave: ")
let velocityNave = 0
let optionMenu = ""

function menu(){
    let option
    while (option != "1" && option !="2" && option != "3" && option != "4") {
        option = prompt("Escolha as opções \n1-Acelerar a nave \n2-Desacelerar a nave \n3-Mostrar dados \n4-Sair do programa")
    }
    return option
}
function acceleration(velocity){
    let newVelocity = velocity +5
    return newVelocity
}
function desaceleration(velocity){
    let newVelocity = velocity -5
    if(newVelocity< 0){
        newVelocity = 0
        return newVelocity
    }
}
function print(naveName,velocity){
    alert("Nave: " + naveName +"\n Velocidade: " + velocity)
}

do{
    optionMenu = option()
    switch(optionMenu){
        case "1":
        
    }
}while(optionMenu != "4")