const UserModel = require('../../database/models/user.model');
const bcrypt = require('bcrypt');
const router = require('express').Router();
const jsonwebtoken = require('jsonwebtoken');
const { key } = require('../../keys');

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email }).exec();
    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        const token = jsonwebtoken.sign({}, key, {
          subject: user._id.toString(),
          expiresIn: 3600 * 24 * 30 * 6,
          algorithm: 'RS256',
        });
        res.cookie('token', token, { httpOnly: true });
        res.json(user);
      } else {
        res.status(400).json('Mauvais email/password');
      }
    } else {
      res.status(400).json('Mauvais email/password');
    }
  } catch (e) {
    console.log(e);
    res.status(400).json('Mauvais email/password');
  }
});
