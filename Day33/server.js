const express = require('express');

const nothing = [
    {
        id: 1,
        name: 'Eddy',
        age: 12
    },
    {
        id: 2,
        name: 'Sonia',
        age: 14
    },
    {
        id: 3,
        name: 'Dez',
        age: 19
    },
]
const app = express()

app.get("/", (req, res) => {
    res.send("Get Request")
})

app.get("/nothing", (req, res)=>{
    res.json(nothing);
})

app.get("/delete/:id", (req, res) => {
    res.json(nothing.filter((member) => member.id === parseInt(req.params.id)));
})

app.listen(4000, () => {
    console.log('Heyyy');
})
