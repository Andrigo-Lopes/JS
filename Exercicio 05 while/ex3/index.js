alert("Comfirmação de dados: ")
let sexo = prompt("Informe seu sexo: [M/F]")
while(sexo != "M" && sexo!= "F"){
    sexo = prompt("Informe seu sexo: [M/F]")
}
if(sexo == "S"){
    alert("Sexo masculino registrado!")
}
else{
    alert("Sexo feminino registrado!")
}
