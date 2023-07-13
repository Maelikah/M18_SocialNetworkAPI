const { Schema, model } = require('mongoose');
const moment = require('moment');
const Reaction = require('./Reaction');

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
                return moment(timestamp).format('MMMM Do YYYY, HH:mm')
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

// Create a virtual called reactionCount  that retrieves the length of the thought's reactions array field on query
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// Initialize Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
