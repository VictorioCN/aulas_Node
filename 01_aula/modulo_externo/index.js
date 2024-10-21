const minimist = require('minimist')

const argumentos = minimist(process.argv.slice(2))

console.log(argumentos)

const nome = argumentos["nome"]

console.log(nome)

const sobrenome = argumentos["sobrenome"]

console.log(`O nome dele é: ${nome}, e seu sobrenom é: ${sobrenome}`)
