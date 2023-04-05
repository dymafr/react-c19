const UserModel = require('../../database/models/user.model');
const bcrypt = require('bcrypt');

const router = require('express').Router();

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new UserModel({
    name,
    email,
    password: await bcrypt.hash(password, 8),
  });

  try {
    const user = await newUser.save();
    res.json(user);
  } catch (err) {
    console.log(err);
    if (err.code === 11000) {
      res.status(400).json('Email déjà utilisé');
    } else {
      res.status(400).json('Oops une erreur est survenue');
    }
  }
});

module.exports = router;
