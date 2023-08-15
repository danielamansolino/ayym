const Income = require('../../models/income');

module.exports = {
  create,
  update,
  delete: deleteIncome,
  index,
  show,
};

async function create(req, res) {
  console.log(req.body, '<-- req.body')
  console.log(req.user, '<-- req.user')
  try {
    const incomes = new Income({
      user: req.body.user,
      type: req.body.type,
      amount: req.body.amount,
      recurring: req.body.recurring,
      date: req.body.date,
      description: req.body.description
    })  
    console.log(req.body, '<-- req.body')
    console.log(req.user, '<-- req.user');
    await account.save();
    res.status(201).json(account);
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