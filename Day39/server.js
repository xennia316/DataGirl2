const express = require('express');
const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb+srv://Sonia:ZENNIA0709@cluster0.hcmtn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

connection.then(() =>{
    console.log("Connection done");
}).catch(()=>{
    console.log("Unsuccessful connection");
})

const app = express();