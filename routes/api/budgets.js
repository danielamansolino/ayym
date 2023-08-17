const express = require('express');
const router = express.Router();
const budgetCtrl = require('../../controllers/api/budgets');

// All paths start with '/api/budgets'

// POST /api/budgets (create an budget)
router.post('/', budgetCtrl.create);
// GET /api/budgets (get all budgets)
router.get('/', budgetCtrl.index);
// PUT /api/budgets/:id (update an budget)
router.put('/', budgetCtrl.update);

module.exports = router;
