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
    async getSingleUser(req, res) {
        try {
        const findUser = await User.findOne({_id: req.params.userId}).select('-__v');
        if (!findUser) {
            return res.status(404).json({ message: 'No user with that ID' })
        }
        res.json(findUser);
        } catch (err) {
        console.log(err);
        res.status(500).json(err);
        }
        },

    // Put a single user by id

    // Delete a single user and its related thoughts by id

    //Post a new friend
}

module.exports = userController;