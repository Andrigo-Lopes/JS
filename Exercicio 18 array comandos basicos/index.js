
let times = ["inter","Palmeiras","Flamengo","Corinthians"]

console.log(times)

times.push("Botafogo") // adicionando elemento no final
//----------------------------

console.log(times)

let removed = times.pop() // removendo o ultimo elemento
console.log("Time removido: "+ removed)

console.log(times)
//------------------------

let removed2 = times.shift() // remove o primeiro elemento
console.log(times)
console.log("time removido: " + removed2)
//-----------------------

times.unshift("Fluminense") // adicionando no inicio
console.log(times)

//------------------------
console.log(times.length)

let pos = times.indexOf("Flamengo") // se n encontar o indice retorna -1
console.log(pos)



