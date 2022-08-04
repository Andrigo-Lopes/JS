alert("Parcelamento")
let valor = Number(prompt("Valor da sua compra: "))
let juros = Number(prompt("Valor do juros por mês: "))
let numeroDeParcelas = prompt("Numeros de parcelas 12 ou 24: ")
let cont = 1
for(i=0; i<numeroDeParcelas;i++){
    console.log(cont + "° Parcela R$ " + valor)
    valor += juros
    cont ++
}