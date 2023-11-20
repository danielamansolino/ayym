const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goalSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who set the goal
  title: { type: String, required: true }, // Title of the goal
  targetAmount: { type: Number, required: true }, // Target amount for the goal
  currentAmount: { type: Number, default: 0 }, // Current saved amount for the goal
  startDate: { type: Date, required: true }, // Target date for the goal
  endDate: { type: Date }, // Target date for the goal
  isCompleted: { type: Boolean, default: false }, // Flag to indicate if the goal is completed
}, {
  timestamps: true
});

module.exports = mongoose.model('Goal', goalSchema);