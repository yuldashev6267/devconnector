const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
const profileController = require("../controller/profileController");

router.post(
  "/profiles",
  authController.protectTo,
  profileController.createProfile
);

router.post(
  "/profiles/add-education",
  authController.protectTo,
  profileController.addEducation
);
router.post(
  "/profiles/add-expirence",
  authController.protectTo,
  profileController.addExpirence
);

router.route("/profiles").get(profileController.getAllProfiles);

router.get(
  "/profiles/me",
  authController.protectTo,
  profileController.myProfile
);

router.patch(
  "/profiles/:id",
  authController.protectTo,
  profileController.updateProfile
);

module.exports = router;
