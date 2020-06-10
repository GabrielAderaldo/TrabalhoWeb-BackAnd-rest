const express = require('express');


const Usuario = require('../model/User');

const router = express.Router();
/**
 * Já que estamos trabalhando como se fosse uma API feita para
 * integração com um Front separado... Vai ai uma documentação 
 * de como usar a API -> 
 * Rota do post ===> ela vai servir para injetar as autenticações 
 * do usuario para dentro do banco de dados
 */
router.post('/registro',async (req,res) =>{
    try{
        const user = await user.create(req.body);
        return res.send({user});


    }catch(err){
        return res.status(400).send({error: 'Falha ao registrar '+'Verifique se os dados estão corretos!'});
    }
});
/*Criei essa rota para testar...*/
router.get('/teste',(req,res)=>{
    res.send("testando...");
});



module.exports = app => app.use('/auth',router);