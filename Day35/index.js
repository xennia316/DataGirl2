const express = require('express');
const app = express();

const { v4: uuidv4 } = require('uuid');

const users = [
    { name: "Tyler", age: 9 },
    { name: "T~K", age: 20 },
    { name: "Yolve", age: 12 },
    { name: "Edd", age: 32 },
    { name: "Hudwry", age: 20 }
]

const todoList = []

app.use(express.json());

app.set('view engine', 'ejs');

app.listen(4000);

app.get('/home', (req, res) => {
    res.render('home', { name: 'Sonia', users });
})

app.get('/home/todo', (req, res) => {
  res.render('todoList', {todoList})
})

app.post('/home/todo', (req, res)=>{
    res.send(req.body)
})