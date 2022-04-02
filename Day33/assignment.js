const express = require('express')

const app = express()
const names = [
    { id: 1, name: 'Yaya', age: 24 },
    { id: 2, name: 'Erica', age: 23 },
    { id: 3, name: 'Sonia', age: 22 },
    { id: 4, name: 'Eddy', age: 20 },
    { id: 5, name: 'Okay', age: 04 },
    { id: 6, name: 'Telli', age: 42 },
];
app.listen(8000, (req, res) => {

});

app.get("/users", (req, res) => {
    res.json(names);
});

app.get("/users/:id", (req, res) => {
    const found = names.filter((guy) => guy.id === parseInt(req.params.id))
    res.json(found)
});

app.get("/user/delete/:id", (req, res) => {
    const newList = names.filter((guy) => guy.id !== parseInt(req.params.id));
    res.json(newList)
})