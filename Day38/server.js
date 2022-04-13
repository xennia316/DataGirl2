const express = require('express');

const UserRouter =  require('./Routes/user.router')
const PostRouter = require('./Routes/post.router')

const mongoose =  require('mongoose');

const connection = mongoose.connect("mongodb+srv://Sonia:ZENNIA0709@cluster0.hcmtn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
connection.then(() => {
  console.log("The connection was succesful.");
})

connection.catch(() => {
    console.log("Connection was not succesful.");
})


const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.use('/api/user/', UserRouter);
app.use('/api/post/', PostRouter);

app.listen(5000)