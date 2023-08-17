const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who created the expense
  category: {
      type: String,
      enum: ["Bills", "Personal", "Transport",  "Housing","Food",
      "Other"],
      required: true,
    }, // Category of the expense (e.g., groceries, utilities, rent)
  amount: { type: Number, required: true }, // Amount of the expense
  recurring: { type: Boolean, default: false }, // Whether the expense is recurring
  paid: { type: Boolean, default: false }, // Whether the expense has been paid
  paymentMethod: { type: String }, // Payment method (cash, card, etc.)
  date: { type: Date, required: true }, // Date of the expense
  description: { type: String }, // Description of the expense
}, {
  timestamps: true
});

module.exports = mongoose.model('Expense', expenseSchema);