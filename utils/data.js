const moment = require('moment');

const usersArray = [
    {
        username: 'Maelikah',
        email: 'Maelikah@bootcamp.com'
    },
    {
        username: 'SocialStar',
        email: 'socialstar@hotmail.com'
    },
    {
        username: 'ConnectMe',
        email: 'connectme@yahoo.com'
    },
    {
        username: 'FriendZone',
        email: 'friendzone@gmail.com'
    },
    {
        username: 'TrendSetter',
        email: 'trendsetter@outlook.com'
    },
    {
        username: 'LikeMaster',
        email: 'likemaster@gmail.com'
    },
    {
        username: 'ChatWizard',
        email: 'chatwizard@yahoo.com'
    },
    {
        username: 'NetworkNinja',
        email: 'networkninja@outlook.com'
    },
    {
        username: 'InstaGuru',
        email: 'instaguru@hotmail.com'
    },
    {
        username: 'BuzzMaker',
        email: 'buzzmaker@gmail.com'
    },
    {
        username: 'SnapLover',
        email: 'snaplover@yahoo.com'
    }
];

const thoughtsArray = [
    {
        thoughtText: 'Learning Mongoose is so exciting! #codingjourney',
        createdAt: moment('July 10, 2023', 'MMMM D, YYYY').format('MMMM Do YYYY'),
        username: 'Maelikah'

    },
    {
        thoughtText: 'Just had a breakthrough with Mongoose! Feeling accomplished. #mongoose',
        createdAt: moment('July 12, 2023', 'MMMM D, YYYY').format('MMMM Do YYYY'),
        username: 'Maelikah'
    },
    {
        thoughtText: 'Gaming marathon on Xbox tonight! Ready to conquer the virtual world. #gamerlife',
        createdAt: moment('December 01, 2020', 'MMMM D, YYYY').format('MMMM Do YYYY'),
        username: 'Maelikah'
    },
    {
        thoughtText: 'The latest Xbox game is mind-blowing!',
        createdAt: moment('October 26, 2019', 'MMMM D, YYYY').format('MMMM Do YYYY'),
        username: 'Maelikah'
    },    
    {
        thoughtText: 'Just enjoying the moment!',
        createdAt: moment('January 04, 2023', 'MMMM D, YYYY').format('MMMM Do YYYY'),
        username: 'SocialStar'
    },
    {
        thoughtText: 'Connecting with new people is so much fun!',
        createdAt: moment('Februrary 14, 2022', 'MMMM D, YYYY').format('MMMM Do YYYY'),
        username: 'ConnectMe'
    },
    {
        thoughtText: 'Life is better with friends around!',
        createdAt: moment('April 18, 2021', 'MMMM D, YYYY').format('MMMM Do YYYY'),
        username: 'FriendZone'
    },
    {
        thoughtText: 'Setting trends and making a difference!',
        createdAt: moment('November 21, 2019', 'MMMM D, YYYY').format('MMMM Do YYYY'),
        username: 'TrendSetter'
    },
    {
        thoughtText: 'Loving all the positive vibes!',
        createdAt: moment('March 13, 2023', 'MMMM D, YYYY').format('MMMM Do YYYY'),
        username: 'LikeMaster'
    },
    {
        thoughtText: 'Chatting my way through the day!',
        createdAt: moment('June 12, 2020', 'MMMM D, YYYY').format('MMMM Do YYYY'),
        username: 'ChatWizard'
    },
    {
        thoughtText: 'Ninja mode: Activated!',
        createdAt: moment('May 10, 2025', 'MMMM D, YYYY').format('MMMM Do YYYY'),
        username: 'NetworkNinja'
    },
    {
        thoughtText: 'Capturing moments with Instagram!',
        createdAt: moment('January 01, 2023', 'MMMM D, YYYY').format('MMMM Do YYYY'),
        username: 'InstaGuru'
    },
    {
        thoughtText: 'Buzzing with excitement!',
        createdAt: moment('September 27, 2022', 'MMMM D, YYYY').format('MMMM Do YYYY'),
        username: 'BuzzMaker'
    },
    {
        thoughtText: 'Snapping all the best memories!',
        createdAt: moment('August 30, 2020', 'MMMM D, YYYY').format('MMMM Do YYYY'),
        username: 'SnapLover'
    }
];

// Export the variables for use in seed.js
module.exports = { usersArray, thoughtsArray };
