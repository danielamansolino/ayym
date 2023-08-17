const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who created the expense
  monthlyBudget: { type: Number, required: true }, // Total monthly budget
  category: {
    type: String,
    enum: ['Transportation', 'Bills', 'Services', 'Cash', 'Check', 'Clothing', 'CreditCard'],
    required: true,
  }, // Category of the expense (e.g., groceries, utilities, rent)
}, {
  timestamps: true
});

// Do we need a function that keeps all budget schemas at a certain amount that doesn't go over the total amount of the user's income?

module.exports = mongoose.model('Budget', budgetSchema);