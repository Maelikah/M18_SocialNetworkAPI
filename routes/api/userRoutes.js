const router = require('express').Router();

const {
    getAllUsers, postNewUser, getSingleUser, updateSigleUser, deleteSingleUser, postNewFriend, deleteSingleFriend} = require('../../controllers/userController');


// Get all users from api/users
router.route('/').get(getAllUsers);

// Post a new users in api/users
router.route('/').post(postNewUser);

// // Get a single user from api/users/:userId
// router.route('/:userId').get(getSingleUser);

// // Update a single user from api/users/:userId
// router.route('/:userId').put(updateSigleUser);

// // Delete a single user from api/users/:userId 
// router.route('/:userId').delete(deleteSingleUser);

// // Post a new friend  to a user's friend list to api/users/:userId/friends/:friendId
// router.route('/:userId/friends/:friendId').post(postNewFriend);

// // Delete a single friend  from a user's friend list to api/users/:userId/friends/:friendId
// router.route('/:userId/friends/:friendId').delete(deleteSingleFriend);

module.exports = router;
