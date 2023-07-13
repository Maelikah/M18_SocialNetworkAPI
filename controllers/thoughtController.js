const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

const thoughtController = {

    // Get all thoughts

    async getAllThoughts(req, res) {
        try {
        const dbThoughtData = await Thought.find().sort({createdAt: -1}); // Sort comments by descending date
        } catch (err) {
        console.log(err);
        res.status(500).json(err);
        }
        },

    // Post a new users 

    // Get a single user by id

    // Put a single user by id

    // Delete a single user and its related thoughts by id

    //Post a new friend
}

module.exports = thoughtController;