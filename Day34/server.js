const express = require('express');

const app = express();

app.use(express.json);
app.use(express.urlencoded())

let users = [
    { id: 1, name: "Eddy", age: 20 },
    { id: 2, name: "Sonia", age: 18 },
    { id: 3, name: "Kyle", age: 0 },
]

app.get('/', (req, res) => {
    res.send('You are in home route')
})

app.get('/all_users', (req, res) => {
    res.json(users);
});

app.get('/get_user/:id', (req, res) => {
    // return res.send(users.filter((items) =>{
    //     return items.id === parseInt(req.params.id)
    // }))

    let user = users.filter((user) => { return user.id === parseInt(req.params.id) })

    return res.send(user[0] || "User not found")
});

app.get('/delete_user/:id', (req, res) => {
    users = users.filter((user) => user.id != req.params.id )
    return res.send(users);
})

app.get('/add_user', (req, res) => {
    users.push(req.body);

    res.send(users)
})

app.listen(4000, console.log("okay"));