const { Schema, model } = require('mongoose');
const moment = require('moment');
const Reaction = require('./Reaction');
const User = require('./User');

// Schema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: function(timestamp) {
                return moment(timestamp).format('MMMM Do YYYY')
            }
        },

        username : {
            type: String,
            required: true,
        },

        reactions : [Reaction],
    },

    {
        toJSON: {
            getters: true,
        },
        id: false,
    } 
);

// When the thought is saved, go and push the value into the user's thoughts array
thoughtSchema.post('save', async function (doc) {
    try {
        // Find the user associated with this thought
        const user = await User.findOne({ username: doc.username });

        // Add the thought's ObjectId to the user's thoughts array
        user.thoughts.push(doc._id);

        // Save the updated user
        await user.save();
    } catch (error) {
        console.error(error);
    }
});

// Create a virtual called reactionCount  that retrieves the length of the thought's reactions array field on query
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// Initialize Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
