const Budget = require('../../models/budget');

module.exports = {
  create,
  update,
  index,
};

async function index(req, res) {
  try {
    const budget = await Budget.find({ user: req.user._id });
    console.log('Budget index route hit', budget)
    res.status(200).json(budget);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function update(req, res) {
  console.log('Budget update route hit', req.body)
  try {
    const budget = await Budget.findById(req.params.id);
    budget.set(req.body);
    budget.save();
    res.status(200).json(budget);
  } catch (err) {
    res.status(500).json(err);
  }
}

// In the future may need a guard against updating this from the ProfileForm.jsx file
async function create(req, res) {
  console.log(req.body)
  try {
    const budget = await Budget.create(req.body);
    budget.save()
    res.status(201).json(budget);
  } catch (err) {
    res.status(400).json(err);
  }
}
