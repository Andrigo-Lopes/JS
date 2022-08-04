const naves = [["Fenix", 8 ,true] , ["Golias", 10 ,true] , ["Helmet", 5 ,false],["Elemental", 3 ,true] , ["Darwin", 15 ,false]]

let tripulantes = naves.filter(cont =>{
    return cont[1] > 9
}).map(cont =>{
    return cont[0]
})

let engate = naves.findIndex(cont =>{
    return cont[2] == false
})

let caixaAlta = naves.map(cont =>{
    return cont[0].toUpperCase
})

let message = ("Naves com mais de 9 tripulantes: " + tripulantes.join(", "))
message+= "\nPlataforma com processo de engate: " + (engate+1)
message+= "\nEspaçonaves destacadas: " + caixaAlta.join(", ")
alert(message)