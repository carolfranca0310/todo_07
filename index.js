const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  //configurando prompt de comando
  const readline = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
  });

  //texto que aparece quando o usuário entra na rota
  readline.setPrompt('Adicione uma propriedade CSS! \n');
  //espaço pra digitar uma resposta
  readline.prompt();

  //vetor em que as propriedades CSS que o usuário digitar vão ser armazenadas
  let propriedades = []

    //função que será executada quando o usuário der enter depois de inserir a propriedade nova
    readline.on('line', function (input){
      if (input !== "sair"){
        propriedades.push(input)
        readline.prompt();
      } else {
        readline.close()
      }
    }).on ('close', function(){
      propriedades.sort(function(a,b){
        var propA = a.toLowerCase(), propB = b.toLwerCase();
        if (propA < propB)
        return -1;
        if (propA>propB)
        return 1;
        return 0;
      });
      //com a função for Each mostro cada propriedade que o usuário digitou, agora já ordenada
      propriedades.forEach(propriedade => console.log(propriedade))
      propriedades = []
      process.exit(0);
    });

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})