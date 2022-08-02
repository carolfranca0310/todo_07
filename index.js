const readline = require("readline")



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lista = []
function listar(){
  rl.question("Digite uma propriedade CSS: ", resposta => {
    if (resposta.trim().toUpperCase() !== 'SAIR'){
      lista.push(resposta)
      listar()
    } else{
      rl.close()
      console.log(lista.sort())
    }
  })
}

listar()


//Karlla, tava tudo errado e Bruno me ajudou, beijos <3 mudei o código inteiro 