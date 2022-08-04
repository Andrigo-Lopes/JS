let pessoa = {
    nome: "Zé",
    idade: 75,
    sexo: "Masculino"
}
console.log(pessoa)
console.log('O seu '+pessoa.nome+ " de idade " + pessoa.idade + " do sexo "+ pessoa.sexo)

pessoa.idade = 85
pessoa.nome = "Cléber"
pessoa.codigo =15248 

console.log('O seu '+pessoa.nome+ " de idade " + pessoa.idade + " do sexo "+ pessoa.sexo)

console.log(pessoa.nome.toUpperCase())
console.log(pessoa)