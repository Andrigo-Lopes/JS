function tabuada(a,b){
for(i=1; i<11; i++){
    console.log(a + "x" + b + ":" + a*b)
        b++
    }
}
tabuada(a = prompt("Valor de A: "), b = prompt("Valor de B: "))
console.log("-----")
tabuada(a = prompt("Valor de A: "), b = prompt("Valor de B: "))