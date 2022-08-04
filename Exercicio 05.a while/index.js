alert("Meme Thor ragnarok")
let senha = "Playboizinho"
let escolha = undefined
while(escolha != senha){
    escolha = prompt("Insira a senha: ")
    if(escolha!= senha){
        alert("Senha errada")
    }
    else if(escolha == senha){
        alert("Bem vindo Playboizinho")
    }
}