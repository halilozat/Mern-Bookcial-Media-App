const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");


//register
const register = async (req, res) => {

  const {
    UserName,
    Email,
    Password,
    ConfirmPassword,
  } = req.body;

  const findUser = User.findOne({UserName})

  if (!findUser) {
    throw new Error('BadRequest')
  }
  if (Password !== ConfirmPassword) {
    throw new Error('Founded')
  }

  const hashedPassword = CryptoJS.AES.encrypt(Password, process.env.SECRET_KEY).toString()

  const newUser = new User({
    username: UserName,
    email: Email,
    password: hashedPassword
  });

  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    if (['Founded','BadRequest'].includes(err.message)){
      res.status(400).json(err.message);
    }
    res.status(500).json(err);
  }
};


const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Wrong password or username!");

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    originalPassword !== req.body.password &&
      res.status(401).json("Wrong password or username!");

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );

    const { password, ...info } = user._doc;

    res.status(200).json({ ...info, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  register,
  login,
}
