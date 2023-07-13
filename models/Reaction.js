const { Schema, Types  } = require('mongoose');
const moment = require('moment');


// Schema to create Reaction model
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },

        reactionBody: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },

        username : {
            type: String,
            required: true,
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: function(timestamp) {
                return moment(timestamp).format('MMMM Do YYYY')
            }
        },
    },

    {
        toJSON: {
            getters: true,
        },
        id: false,
    } 
);

module.exports = reactionSchema;