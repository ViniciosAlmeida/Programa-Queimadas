const express = require ('express');
const app = express();
const path = require ('path');

const port = 8042;

app.get ('/visualization',(req,res)=> (
    res.sendFile(path.join(__dirname + '/index.html'))
))

app.listen(port , ()=> {
    console.log(`Executando em https://localhost:${port}`)
})
