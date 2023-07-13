const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

const userController = {

    // Get all users
    async getAllUsers(req, res) {
        try {
        const dbUserData = await User.find().select('-__v');
        res.json(dbUserData);
        } catch (err) {
        console.log(err);
        res.status(500).json(err);
        }
        },

    // Post a new user
    async postNewUser(req, res) {
        try {
        const newUser = await User.create(req.body);
        res.json(newUser);
        } catch (err) {
        console.log(err);
        res.status(500).json(err);
        }
        },

    // Get a single user by id

    // Put a single user by id

    // Delete a single user and its related thoughts by id

    //Post a new friend
}

module.exports = userController;