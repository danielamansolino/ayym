const express = require('express');
const router = express.Router();
const incomeCtrl = require('../../controllers/api/income');

// All paths start with '/api/incomes'

// POST /api/incomes (create an income)
router.post('/', incomeCtrl.create);
// PUT /api/incomes/:id (update an income)
router.put('/:id', incomeCtrl.update);
// DELETE /api/incomes/:id (delete an income)
router.delete('/:id', incomeCtrl.delete);
// GET /api/incomes (list all incomes)
router.get('/', incomeCtrl.index);
// GET /api/incomes/:id (get details of a specific income)
router.get('/:id', incomeCtrl.show);

module.exports = router;
