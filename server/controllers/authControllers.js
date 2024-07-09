const User = require('../models/user')

const test = (req, res) => {
  res.json("test is working");
};

const registerUser = async(req, res) => {
  try {
    const { name, email, password } = res.body;
    // Check if name was entered
    if(!name){
        return res.json({
            error:"Name is Requried"
        })
    };
    //check if password is good
    if(!passowrd || password.length < 6){
        return res.json({
            error:"Password is required and should be 6 characters long"
        })

    };
    //Check Email
    const exist = await User.findOne({email});
    if(exist) {
        return res.json({
            error:"Email is Taken already"
        })
    }

    const user = await User.create({
        name,email,password
    })
    return res.json(user)
  } catch (error) {
    console.log(error)

  }
};

module.exports = {
  test,
  registerUser,
};
