let naveName = prompt("Digite o nome da nave: ")
let newNaveName = ""

for(i = naveName.length -1; i >=0; i--){
    if(naveName[i] == "e"){
        break
    }
    else{
    newNaveName += naveName[i]
    }
}
alert("Nome original : " + naveName)
alert("Nome novo: " + newNaveName)