const User = require("../models/user");
const {hashPassword, comparePassword} = require('../helpers/auth')

const test = (req, res) => {
  res.json("test is working");
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Check if name was entered
    if (!name) {
      return res.json({
        error: "Name is Requried",
      });
    }
    //check if password is good
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be 6 characters long",
      });
    }
    //Check Email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is Taken already",
      });
    }

    const hashedPassword = await hashPassword(password)

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  test,
  registerUser,
};
