const express = require('express');
const UserModel = require('../src/models/user.models')
const app = express();
app.use(express.json());

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

app.post('/users',async (req,res)=>{
    try{
        const user = await UserModel.create(req.body)
        res.status(201).json(user);
    }catch(error){
        res.status(500).send(error.message);
    }
})

const port = 8080

app.listen(port, ()=> console.log(`Rodando na porta ${port} !`));