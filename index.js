const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const readline = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})