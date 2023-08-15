const Profile = require('../../models/profile');

module.exports = {
  create,
  update,
  get,
};

async function create(req, res) {
  try {
    const existingProfile = await Profile.findOne({ user: req.user._id });
    if (existingProfile) {
      return res.status(400).json({ message: 'Profile already exists' });
    } else {
      const profile = await Profile.create({ ...req.body });
      res.status(201).json(profile);
    }
  } catch (err) {
    res.status(400).json(err);
  }
}

async function update(req, res) {
  try {
    const profile = await Profile.findOneAndUpdate({ user: req.user._id }, req.body, { new: true });
    res.json(profile);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function get(req, res) {
  try {
    const profile = await Profile.findOne({ user: req.user._id });
    console.log(profile);
    if (!profile) throw new Error();
    res.json(profile);
  } catch (err) {
    res.status(404).json('Profile not found');
  }
}