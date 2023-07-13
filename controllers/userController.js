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

    // Update a single user by id
    async updateSigleUser(req, res) {
        try {
        const updateUser = await User.findOneAndUpdate(
            {_id: req.params.userId},
            {$set: req.body},
            { runValidators: true, new: true }
        );
        if (!updateUser) {
            return res.status(404).json({ message: 'No user with that ID' })
        }
        res.json(updateUser);
        } catch (err) {
        console.log(err);
        res.status(500).json(err);
        }
        },

    // Delete a single user and its related thoughts by id
    async deleteSingleUser(req, res) {
        try {
        const deleteUser = await User.findOneAndRemove({_id: req.params.userId},);
        if (!deleteUser) {
            return res.status(404).json({ message: 'No user with that ID' })
        }
        await Thought.deleteMany({ _id: { $in: deleteUser.thoughts } });
        res.json({ message: 'User and its associated thoughts have been deleted.' });
        } catch (err) {
        console.log(err);
        res.status(500).json(err);
        }
        },

    //Post a new friend
    async postNewFriend(req, res) {
        try {
        const newFriend = await User.findOneAndUpdate(
            {_id: req.params.userId},
            {$addToSet: {friends: req.params.friendId}},
            {new: true}
        );
        if (!newFriend) {
            return res.status(404).json({ message: 'No user with that ID' })
        }
        res.json(newFriend);
        } catch (err) {
        console.log(err);
        res.status(500).json(err);
        }
        },

    // Delete a friend
    async deleteSingleFriend(req, res) {
        try {
        const deleteFriend = await User.findOneAndUpdate(
            {_id: req.params.userId},
            {$pull: {friends: req.params.friendId}},
            {new: true}
        );
        if (!deleteFriend) {
            return res.status(404).json({ message: 'No user with that ID' })
        }
        res.json({ message: 'Friend association has been deleted from user.' });
        } catch (err) {
        console.log(err);
        res.status(500).json(err);
        }
        },
}

module.exports = userController;