const router = require('express').Router();

const {
    getAllThoughts, postNewThought, getSingleThought, updateSigleThought, deleteSingleThought, postNewReaction, deleteSingleReaction} = require('../../controllers/thoughtController');


// Get all thoughts from api/thoughts
router.route('/').get(getAllThoughts);

// Post a new thoughts in api/thoughts
router.route('/').post(postNewThought);

// Get a single thought from api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought);

// Update a single thought from aapi/thoughts/:thoughtId
router.route('/:thoughtId').put(updateSigleThought);

// // Delete a single thought from api/thoughts/:thoughtId
// router.route('/:thoughtId').delete(deleteSingleThought);

// // Post a new reaction  to a thought's reaction list to api/thoughts/:thoughtId/reactions
// router.route('/:thoughtId/reactions').post(postNewReaction);

// // Delete a single reaction  from a thought's reaction list to api/thoughts/:thoughtId/reactions/:reactionId
// router.route('/:thoughtId/reactions/:reactionId').delete(deleteSingleReaction);

module.exports = router;