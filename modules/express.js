const express = require('express');
const UserModel = require('../src/models/user.models')
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
});

app.post('/users',(req,res)=>{
    const user = UserModel.create(req.body)
    res.status(201).json(user);
})

const port = 8080

app.listen(port, ()=> console.log(`Rodando na porta ${port} !`));