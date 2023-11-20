const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const incomeSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who received the income
  type: { type: String, required: true }, // Type of income (e.g., job, loan, side hustle)
  amount: { type: Number, required: true }, // Amount of the income
  recurring: { type: Boolean }, // Whether or not the income is reoccuring
  date: { type: Date }, // Date the income was received
  description: { type: String }, // Description of the income
}, {
  timestamps: true
});

module.exports = mongoose.model('Income', incomeSchema);