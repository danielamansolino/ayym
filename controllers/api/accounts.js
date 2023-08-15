const Account = require('../../models/account');
const User = require('../../models/user');

module.exports = {
  create,
  update,
  delete: deleteAccount,
  index,
  show,
  showUserAccounts,
};

async function showUserAccounts(req, res) {
  console.log('showAccounts req.params.id', req.params.id)
  try {
    const accounts = await Account.find({ user: req.params.id });
    res.json(accounts);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function create(req, res) {
  try {
    const account = new Account({
      user: req.body.user,
      type: req.body.type,
      balance: req.body.balance,
      isPrimary: req.body.isPrimary,
      expense: req.body.expense || null,
      income: req.body.income || null
    });
    await account.save();
    res.status(201).json(account);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function update(req, res) {
  try {
    const account = await Account.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(account);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteAccount(req, res) {
  try {
    await Account.findByIdAndRemove(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json(err);
  }
}

async function index(req, res) {
  try {
    const accounts = await Account.find({ user: req.user._id });
    console.log('Found accounts:', accounts);
    res.json(accounts);
  } catch (err) {
    console.error('Error fetching accounts:', err);
    res.status(400).json(err);
  }
}


async function show(req, res) {
  try {
    const account = await Account.findOne({ _id: req.params.id, user: req.user._id });
    if (!account) throw new Error();
    res.json(account);
  } catch (err) {
    res.status(404).json('Account not found');
  }
}
