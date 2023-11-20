const express = require('express');
const router = express.Router();
const profileCtrl = require('../../controllers/api/profiles');

// All paths start with '/api/profiles'

// GET /api/profiles (get the user's profile)
router.get('/', profileCtrl.get);
// POST /api/profiles (create a profile)
router.post('/', profileCtrl.create);
// PUT /api/profiles (update a profile)
router.put('/', profileCtrl.update);


module.exports = router;
