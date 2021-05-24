const mongoose = require("mongoose");
const moment = require("moment");
const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  company: {
    type: String,
    required: [true, "Company name should be provided"],
  },
  website: {
    type: String,
  },
  location: {
    type: String,
    required: [true, "Location should be Provided"],
  },
  status: {
    type: String,
    required: [true, "Please provide a status"],
  },
  skills: {
    type: [String],
    required: [true, "Please provide a skills"],
    minLength: [2, "Please provide at least 2 field"],
    maxLength: [10, "You can not add more than 10 field"],
  },
  bio: {
    type: String,
  },
  expirence: [
    {
      title: {
        type: String,
        required: [true, "Please provide a title"],
      },
      companyName: {
        type: String,
        required: [true, "Please provide a Company name"],
      },
      location: {
        type: String,
      },
      from: {
        type: String,
        required: [true, "Please provide a start date"],
      },
      to: {
        type: String,
      },
      current: {
        type: Boolean,
        default: false,
      },
      description: {
        type: String,
      },
    },
  ],
  education: [
    {
      school: {
        type: String,
        required: [true, "Please provide a school"],
      },
      degree: {
        type: String,
        required: [true, "Please provide a degree"],
      },
      fieldofstudy: {
        type: String,
        required: [true, "Please provide a field of study"],
      },
      from: {
        type: String,
        required: [true, "Please provide a from"],
      },
      to: {
        type: String,
      },
      current: {
        type: Boolean,
        default: false,
      },
      description: {
        type: String,
      },
    },
  ],
  social: {
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    telegram: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

profileSchema.pre(/^find/, function (next) {
  this.find().populate("user", ["name"]);
  next();
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
