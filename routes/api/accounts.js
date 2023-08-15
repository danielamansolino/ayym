const express = require('express');
const router = express.Router();
const accountCtrl = require('../../controllers/api/accounts');

// All paths start with '/api/accounts'

// POST /api/accounts (create an account)
router.post('/', accountCtrl.create);
// PUT /api/accounts/:id (update an account)
router.put('/:id', accountCtrl.update);
// DELETE /api/accounts/:id (delete an account)
router.delete('/:id', accountCtrl.delete);
// GET /api/accounts (list all accounts)
router.get('/', accountCtrl.index);
// GET /api/accounts/:id (get details of a specific account)
router.get('/:id', accountCtrl.show);

module.exports = router;
