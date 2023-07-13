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

    // Get a single thought by id
    async getSingleThought(req, res) {
        try {
        const findThought = await Thought.findOne({_id: req.params.thoughtId});
        if (!findThought) {
            return res.status(404).json({ message: 'No thought with that ID' })
        }
        res.json(findThought);
        } catch (err) {
        console.log(err);
        res.status(500).json(err);
        }
        },

    // Update a single thought by id
    async updateSigleThought(req, res) {
        try {
        const updateThought = await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$set: req.body},
            { runValidators: true, new: true }
        )
        if (!updateThought) {
            return res.status(404).json({ message: 'No thought with that ID' })
        }
        res.json(updateThought);
        } catch (err) {
        console.log(err);
        res.status(500).json(err);
        }
        },



    // Delete a single user and its related thoughts by id

    //Post a new friend
}

module.exports = thoughtController;