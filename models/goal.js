const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goalSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who set the goal
  title: { type: String, required: true }, // Title of the goal
  targetAmount: { type: Number, required: true }, // Target amount for the goal
  currentAmount: { type: Number, default: 0 }, // Current saved amount for the goal
}, {
  timestamps: true
});

module.exports = mongoose.model('Goal', goalSchema);