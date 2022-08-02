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


})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})