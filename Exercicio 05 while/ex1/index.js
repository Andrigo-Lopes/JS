let dobra = 0
let naveName = prompt("Nome da nave: ")
let option = prompt("Deseja entrar na dobra espacial?")
if(option == "Sim"){
    dobra++
}
else{
    alert("Dobras: " + dobra)
}
while(option =="Sim"){
    option = prompt("Deseja entar novamente na dobra: ")
    if(option=="Sim"){
        dobra++
    }
    else if(option =="Não"){
        alert("Nome : " + naveName + "\nDobras: " + dobra)
        break
    }
}

