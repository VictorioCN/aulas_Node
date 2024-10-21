const fs = require('fs')

fs.readFile("teste.txt", "utf8", (erro, dados) =>
{
    if(erro){
            console.log(erro)
    }
    else{
        console.log(dados)
    }
})

const mensagem = "texto muito legal, pra ver se funciona"
const mensagem2 = "\    n A mesma mensagem, dnv WOW"

fs.writeFile('teste2oRetorno.txt', mensagem, "utf8", (erro) =>{
    if(erro){
        console.log("deu erro, se vira ai")
    }
    else{
        console.log("Arquivo escrito successfully")
    }
})

fs.appendFile('teste2oRetorno.txt', mensagem2, "utf8", (erro) =>{
    if(erro){
        console.log("deu erro, se vira ai")
    }
    else{
        console.log("Arquivo escrito2 successfully")
    }
})

fs.unlink('teste2oRetorno.txt', (erro) =>{
    if(erro){
        console.log("dNão consegui apagar")
    }
    else{
        console.log("Arquivo apagado successfully")
    }
})