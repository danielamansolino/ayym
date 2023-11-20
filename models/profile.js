const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who received the income
  image: { type: String }, // Image of the user, if we need it or an Avatar
  firstName: { type: String, required: true }, // First name of the user, if needed, will have to delete from "User" model
  lastName: { type: String, required: true }, // Last name of the user, if needed, will have to delete from "User" model
  age: { type: Number, required: true }, // Age of the user

  isStudent: { type: Boolean }, // Is the user a student
  school: { type: String }, // School of the user, if they are a student
  isEmployed: { type: Boolean }, // Is the user employed
  occupation: { type: String }, // Occupation of the user, if they are employed
  workHours: { type: Number }, // Work hours of the user, if they are employed
  salary: { type: Number }, // Salary of the user, if they are employed

  location: { type: String, required: true }, // Location of the user
  bio: { type: String }, // Bio of the user
  notifications: { type: Boolean, default: false }, // Notifications for the user

}, {
  timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema);