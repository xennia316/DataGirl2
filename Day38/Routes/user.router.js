const mongoose = require('mongoose');
const UserModel = require('../Models/User.model')
const express = require('express');

const router = express.Router();

router.post('/create_account', async (req, res) => {
    const body = req.body;
    const user = await new UserModel(body);
    console.log(user);
    await user.save();
    return res.json({ message: ' User created successfully', data: user });
});

router.post('/login', async (req, res) => {
    const { number, password } = req.body

    const isUserFound = await UserModel.findOne({ number: number, password: password })
    res.json(
        isUserFound ? { message: 'user found', user: isUserFound } : { message: "User not found" }
    )
});

router.put('/update_profile', async (req, res) => {
    const { _id } = req.body
    const updataUser = await UserModel.findByIdAndUpdate(
        { _id: _id }, req.body
    );

    res.send(updataUser)
})

router.delete('/delete_user', async (req, res) => {
    const { id, password } = req.body;
    const deleteUser = await UserModel.deleteOne({ _id: id, password: password });

    res.send(deleteUser.deletedCount 
        ? { success: true, user: deleteUser } 
        : { success: false, message: "Could not delete user" })
})


module.exports = router