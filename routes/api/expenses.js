const express = require('express');
const router = express.Router();
const expenseCtrl = require('../../controllers/api/expense');

// All paths start with '/api/expenses'

// POST /api/expenses (create an expense)
router.post('/', expenseCtrl.create);
// PUT /api/expenses/:id (update an expense)
router.put('/:id', expenseCtrl.update);
// DELETE /api/expenses/:id (delete an expense)
router.delete('/:id', expenseCtrl.delete);
// GET /api/expenses (list all expenses)
router.get('/', expenseCtrl.index);
// GET /api/expenses/:id (get details of a specific expense)
router.get('/:id', expenseCtrl.show);

module.exports = router;
