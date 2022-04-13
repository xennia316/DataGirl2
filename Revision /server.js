const mongoose = require('mongoose');
const User = require('./user');
const express = require('express');

const connection = mongoose.connect("mongodb+srv://Sonia:ZENNIA0709@cluster0.hcmtn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
connection.then(() => {
    console.log("Succesfully connected to database");
});

connection.catch(() => {
    console.log("The connection was unsuccessful");
});

const user = new User({ name: "Kyle", id: 1, age: 0 });
user.save().then(() => {
    console.log("User saved")
}).catch(() => {
    console.log("User not saved!")
})

console.log(user);

async function run() {
    try {
        const user1 = await User.create({ name: "Kyley", id: 2, age: 0.00, email:  "Qwerty@noway.com" })
        user1.name = "Sally"
        user1.save()
        console.log(user1);

    } catch (e) {
        console.log(e.message);
    }
}
run()

const app = express();

app.listen(5000);
app.use(express.json);
app.use(express.urlencoded());

app.post('/create_user', async(req, res) =>{
    const body =   req.body;

    const user = await new User(body);
    await user.save();
    console.log(user);
})