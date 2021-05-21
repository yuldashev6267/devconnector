const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

exports.signUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({
      name,
      email,
      password,
    });
    const token = jwt.sign({ id: user._id }, process.env.SECRET_TOKEN, {
      expiresIn: process.env.EXPIRATION_DATE,
    });
    res.status(201).json({
      status: "success",
      data: {
        user,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (
      !user ||
      !(await user.passwordAreMatch(req.body.password, user.password))
    ) {
      return res.status(400).json({
        status: "fail",
        message: "Email or password incorrect",
      });
    }
    const token = jwt.sign({ id: user._id }, process.env.SECRET_TOKEN, {
      expiresIn: process.env.EXPIRATION_DATE,
    });
    res.status(200).json({
      status: "success",
      message: "You are logged in",
      data: {
        user,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.protectTo = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(404).json({
        status: "fail",
        message: "Token not found",
      });
    }
    const decodedUser = await jwt.verify(token, process.env.SECRET_TOKEN);
    const user = await User.findById(decodedUser.id);
    if (!user) {
      res.status(401).json({
        status: "fail",
        message: "Please authenticate",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.adminPanel = (...roles) => {
  return (req, res, next) => {};
};
