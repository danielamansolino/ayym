const express = require('express');
const router = express.Router();
const accountCtrl = require('../../controllers/api/budgets');

// All paths start with '/api/budgets'

// POST /api/budgets (create an account)
router.post('/', accountCtrl.create);

module.exports = router;
