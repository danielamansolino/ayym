const Expense = require('../../models/expense');

module.exports = {
  create,
  update,
  delete: deleteExpense,
  index,
  show,
};

async function create(req, res) {
  try {
    // Add the expense to the db
    const expense = await Expense.create({ ...req.body, user: req.user._id });
    res.status(201).json(expense);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function update(req, res) {
  try {
    const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(expense);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteExpense(req, res) {
  try {
    await Expense.findByIdAndRemove(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json(err);
  }
}

async function index(req, res) {
  try {
    const expenses = await Expense.find({ user: req.user._id });
    res.json(expenses);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function show(req, res) {
  try {
    const expense = await Expense.findOne({ _id: req.params.id, user: req.user._id });
    if (!expense) throw new Error();
    res.json(expense);
  } catch (err) {
    res.status(404).json('Expense not found');
  }
}