const Budget = require('../../models/budget');
const User = require('../../models/user');

module.exports = {
  create,

};

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
