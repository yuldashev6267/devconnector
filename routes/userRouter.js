const express = require("express");
const authController = require("../controller/authController");
const userController = require("../controller/userController");
const router = express.Router();

router.post("/users/signup", authController.signUp);
router.post("/users/login", authController.login);
router.get("/users", authController.protectTo, userController.getAllUsers);
router.get(
  "/users/me",
  authController.protectTo,
  userController.authenticatedUser
);
router.delete(
  "/users/deleteMe",
  authController.protectTo,
  userController.deleteMe
);
module.exports = router;
