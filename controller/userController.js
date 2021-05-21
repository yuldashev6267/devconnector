const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      data: {
        users,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.authenticatedUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      res.status(401).json({
        status: "fail",
        message: "Please authenticate",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
      stack: error.stack,
    });
  }
};

exports.deleteMe = async (req, res) => {
  try {
    await req.user.remove(req.user._id);
    res.status(200).json({
      message: "success",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
      stack: error.stack,
    });
  }
};
