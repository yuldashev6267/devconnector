const { response } = require("express");
const Profile = require("../model/profileModel");

exports.createProfile = async (req, res) => {
  try {
    const {
      company,
      website,
      location,
      status,
      skills,
      bio,
      expirence,
      education,
    } = req.body;
    let { social } = req.body;
    let skillsArray;
    if (skills) {
      skillsArray = skills.split(",").map((el) => el.trim());
    }
    const user = req.user;
    if (user === null) {
      res.status(401).json({
        status: "fail",
        message: "Please authenticate",
      });
    }

    social = {};
    if (req.body.youtube) social.youtube = req.body.youtube;
    if (req.body.telegram) social.telegram = req.body.telegram;
    if (req.body.linkedin) social.linkedin = req.body.linkedin;
    if (req.body.instagram) social.instagram = req.body.instagram;
    if (req.body.facebook) social.facebook = req.body.facebook;
    if (req.body.twitter) social.facebook = req.body.twitter;
    const profile = await Profile.create({
      user,
      company,
      website,
      location,
      status,
      skills: skillsArray,
      bio,
      expirence,
      education,
      social,
    });

    res.status(201).json({
      status: "success",
      data: {
        profile,
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

exports.addEducation = async (req, res) => {
  try {
    const { school, degree, fieldofstudy, from, to, current, decription } =
      req.body;

    const newEducation = {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      decription,
    };
    const userProfile = await Profile.findOne({ user: req.user._id });
    userProfile.education.unshift(newEducation);
    userProfile.save();
    res.status(200).json({
      status: "success",
      message: userProfile,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
      stack: error.stack,
    });
  }
};

exports.addExpirence = async (req, res) => {
  try {
    const { title, companyName, location, from, to, current, description } =
      req.body;
    const newExpirence = {
      title,
      companyName,
      location,
      from,
      to,
      current,
      description,
    };

    const profile = await Profile.findOne({ user: req.user._id });
    profile.expirence.unshift(newExpirence);
    await profile.save();
    res.status(201).json({
      status: "success",
      data: {
        profile,
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

exports.getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.status(200).json({
      status: "success",
      docs: profiles.length,
      data: {
        profiles,
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

exports.deleteEducation = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    const removeIndex = profile.education
      .map((el) => el.id)
      .indexOf(req.params.edu_id);
    profile.education.splice(removeIndex, 1);
    await profile.save();
    res.status(200).json({
      status: "success",
      message: "deleted",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
      stack: error.stack,
    });
  }
};
exports.deleteExpirence = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    const removeIndex = profile.expirence
      .map((el) => el.id)
      .indexOf(req.params.exp_id);
    profile.expirence.splice(removeIndex, 1);
    await profile.save();
    res.status(200).json({
      status: "success",
      message: "deleted",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
      stack: error.stack,
    });
  }
};

exports.myProfile = async (req, res, next) => {
  try {
    const profile = await Profile.find({ user: req.user._id });

    res.status(200).json({
      status: "success",
      data: {
        profile,
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

exports.updateProfile = async (req, res, next) => {
  try {
    const updates = Object.keys(req.body);
    const allowedUpdates = [
      "company",
      "website",
      "location",
      "status",
      "skills",
      "bio",
      "social",
    ];
    const isAllowed = updates.every((el) => allowedUpdates.includes(el));
    if (!isAllowed) {
      res.status(400).json({
        status: "fail",
        message: "Please check all updates?And try again.",
      });
    }
    const findProfile = await Profile.findById(req.params.id);
    updates.forEach((el) => {
      findProfile[el] = req.body[el];
    });

    await findProfile.save();

    res.status(200).json({
      status: "success",
      message: "Updated",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
      stack: error.stack,
    });
  }
};

exports.findById = async (req, res, next) => {
  try {
    const profile = await Profile.findById(req.params.id);
    if (!profile) {
      res.status(404).json({
        status: "fail",
        message: "There is no profile with that id",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        profile,
      },
    });
  } catch (error) {
    response.status(500).json({
      status: "error",
      message: error.message,
      stack: error.stack,
    });
  }
};
