let naveName = prompt("Informe o nome da nave: ")
let caracter = prompt("Qual caractere deseja substituir: ")
let escCaractere = prompt("Informe o caracter que você deseja utilizar: ")
let newNaveName = ""
for(let i = 0; i < naveName.length; i ++){
    if(naveName[i] == caracter){
        newNaveName += escCaractere
    }
    else{
        newNaveName+=naveName[i]
    }
}
alert(newNaveName)