const connection = require('../config/connection');
const moment = require('moment');
const { User, Thought } = require('../models');
const { usersArray, thoughtsArray } = require('./data.js');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    // Delete the collections if they exist
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
        await connection.dropCollection('users');
    }

    let thoughtsCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtsCheck.length) {
        await connection.dropCollection('thoughts');
    }

    // Add usernames to the collection and await the results
    await User.collection.insertMany(usersArray);

    // Add thoughts to the collection and await the results
    await Thought.collection.insertMany(thoughtsArray);

    // Log out the seed data to indicate what should appear in the database
    console.table(usersArray);
    console.table(thoughtsArray);
    console.info('Seeding complete! 🌱');
    process.exit(0);

});

