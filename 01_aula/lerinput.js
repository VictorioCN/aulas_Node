const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Qual sua idade? ", (idade) =>{
    idade = parseInt(idade)
    if(idade >= 18){
        console.log("Já pode se alistar")
    }
    else{
        console.log("Vai estudar pro enem parça")
    }
})