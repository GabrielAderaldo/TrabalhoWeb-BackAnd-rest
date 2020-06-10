const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const porta = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.get('/',(req,res) =>{

res.send("Olá seja muito bem vindo a nossa primeira rota.");

});



require('./controller/autentControler')(app);


app.listen(porta,function(){
console.log("O servidor está rodando na porta:",porta);
});