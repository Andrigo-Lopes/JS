
list=[]
while(list){
    let num = prompt("Digite um valor: ")
    if(num != 5){
        list.push(num)
    }
    else{
        break
    }
    console.log(list)
}
console.log(list)
alert("Maior valor da lista: " + Math.max(list))
alert("Menor valor da lista: " + Math.min(list))