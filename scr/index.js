const express = ('express');

const app = express('');
const port = 3500;

app.liste(port,() => { 
console.log('el server esta corriendo',port)
});