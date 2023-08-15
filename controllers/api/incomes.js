const Income = require('../../models/income');

module.exports = {
  create,
  update,
  delete: deleteIncome,
  index,
  show,
};

async function create(req, res) {
  try {
    const income = await Income.create({ ...req.body, user: req.user._id });
    res.status(201).json(income);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function update(req, res) {
  try {
    const income = await Income.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(income);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteIncome(req, res) {
  try {
    await Income.findByIdAndRemove(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json(err);
  }
}

async function index(req, res) {
  try {
    const incomes = await Income.find({ user: req.user._id });
    res.json(incomes);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function show(req, res) {
  try {
    const income = await Income.findOne({ _id: req.params.id, user: req.user._id });
    if (!income) throw new Error();
    res.json(income);
  } catch (err) {
    res.status(404).json('Income not found');
  }
}