const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

const thoughtController = {

    // Get all thoughts
    async getAllThoughts(req, res) {
        try {
        const dbThoughtData = await Thought.find().sort({createdAt: -1}); // Sort comments by descending date
        res.json(dbThoughtData);
        } catch (err) {
        console.log(err);
        res.status(500).json(err);
        }
        },

    // Post a new Thought 
    async postNewThought(req, res) {
        try {
        const newThought = await Thought.create(req.body);
        res.json(newThought);
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

module.exports = thoughtController;