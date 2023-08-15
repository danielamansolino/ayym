const express = require('express');
const router = express.Router();
const goalCtrl = require('../../controllers/api/goal');

// All paths start with '/api/goals'

// POST /api/goals (create a goal)
router.post('/', goalCtrl.create);
// PUT /api/goals/:id (update a goal)
router.put('/:id', goalCtrl.update);
// DELETE /api/goals/:id (delete a goal)
router.delete('/:id', goalCtrl.delete);
// GET /api/goals (list all goals)
router.get('/', goalCtrl.index);
// GET /api/goals/:id (get details of a specific goal)
router.get('/:id', goalCtrl.show);

module.exports = router;
