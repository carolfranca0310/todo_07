const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const readline = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
  });

  readline.setPrompt('Adicione uma propriedade CSS! \n');
  readline.prompt();

  let propriedades = []

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
      propriedades.forEach(propriedade => console.log(propriedade))
      propriedades = []
      process.exit(0);
    });

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})