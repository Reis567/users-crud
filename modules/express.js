const express = require('express');

const app = express();

app.get('/users',(req,res)=>{
    const users = [
        {
            firstName:'John',
            lastName:'Cena',
            email:'johncenawwe@email.com',
            password:'iamjohn123',
        },
    ];
    res.status(200).json(users)
})

const port = 8080

app.listen(port, ()=> console.log(`Rodando na porta ${port} !`));