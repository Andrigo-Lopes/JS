alert("Mudando letras da string")
let naveName = prompt("Nome da nave: ")
let letraAsubstituir = prompt("Letra que você deseja substituir: ")
let letraDesejada = prompt("Letra que você quer usar: ")
let newNaveName =""
for(let i=0; i < naveName.length; i++){
    if(naveName[i] == letraAsubstituir){
        newNaveName += letraAsubstituir
    }
    else{
        newNaveName += naveName[i]
    }
}
alert(newNaveName)