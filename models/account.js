const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user
  expense: { type: Schema.Types.ObjectId, ref: 'Expense', default: null }, // Reference to the expense
  income: { type: Schema.Types.ObjectId, ref: 'Income', default: null }, // Reference to the income
  type: { type: String, required: true }, // Type of account (e.g., checking, savings, credit card)
  balance: { type: Number, default: 0 }, // Current balance of the account
  isPrimary: { type: Boolean, default: false }, // Whether this is the user's primary account
}, {
  timestamps: true
});

module.exports = mongoose.model('Account', accountSchema);
