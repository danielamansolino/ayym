const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const incomeSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who received the income
  type: { type: String, required: true }, // Type of income (e.g., job, loan, side hustle)
  amount: { type: Number, required: true }, // Amount of the income
  balance: { type: Number }, // Balance after the income
}, {
  timestamps: true
});

module.exports = mongoose.model('Income', incomeSchema);