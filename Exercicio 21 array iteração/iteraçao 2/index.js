
//---------------forEach = percore os elementos mostrando o indice----------------

let games = ["Bully","God of War","Fifa","CsGo"]

//games.forEach(function(todosGames,index){
    //console.log("Game: " + todosGames + "\nIndice: " + index)
//})

//-------------------map modifica os elementos sem alterar o array----------------

//let upCase = games.map(function(todosGames){ 
    //let upCase = todosGames.toUpperCase()
    //return upCase
//})
//console.log(upCase)

//----------------filter-------------------

//let numLetras = games.filter(percorrer =>{return percorrer.length>= 7}) 

//console.log(numLetras)   mostra quais sao os elemento que é maior ou igual a 7 caractere

//------------------find---------------------

let numLetras = games.filter(percorrer =>{return percorrer.length>= 7}) 

console.log(numLetras) //mostra qual o primeiro elemento que satisfaz  o código acima