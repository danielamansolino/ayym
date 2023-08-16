const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: { type: String, required: true },
  subCategory: { type: String },
  amount: { type: Number, required: true, default: 0 },
}, {
  timestamps: true
});

const budgetSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who created the expense
  monthlyBudget: { type: Number, required: true }, // Total monthly budget
  category: [categorySchema],
}, {
  timestamps: true
});

// Do we need a function that keeps all budget schemas at a certain amount that doesn't go over the total amount of the user's income?

module.exports = mongoose.model('Budget', budgetSchema);