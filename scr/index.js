const express = require("express");

const app = express();
const port = 9000;

app.get('/',(req,res) => {
    res.send("bienvenidos a mi API")
})

app.liste(port,() => 
console.log('el server esta corriendo',port)
);
