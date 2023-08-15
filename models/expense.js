const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who created the expense
  type: { type: String, required: true }, // Category of the expense (e.g., groceries, utilities, rent)
  amount: { type: Number, required: true }, // Amount of the expense
  recurring: { type: Boolean, default: false }, // Whether the expense is recurring
  paid: { type: Boolean, default: false }, // Whether the expense has been paid
  paymentMethod: { type: String, required: true }, // Payment method (cash, card, etc.)
}, {
  timestamps: true
});

module.exports = mongoose.model('Expense', expenseSchema);