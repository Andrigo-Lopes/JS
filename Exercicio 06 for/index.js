let spaceShip = "Leno Brega"
let newSpace = ""

for(let i = 0; i < spaceShip.length;i++){
    if(spaceShip[i] == "e"){
        newSpace+= "i"
    }else{
        newSpace += spaceShip[i]
    }
}
console.log(newSpace)