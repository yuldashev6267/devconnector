const mongoose = require("mongoose");
const Profile = require("./profileModel");
const validator = require("validator");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name should be provided"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email should be provided"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Please provide a correct email");
      }
    },
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
  password: {
    type: String,
    required: [true, "Password should be provided"],
    minlength: [6, "Minimum length of password should be 6 characters"],
    maxlength: [12, "Maximum length of password should be 12 characters"],
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.passwordAreMatch = async function (
  candidatePassword,
  password
) {
  return await bcrypt.compare(candidatePassword, password);
};
userSchema.pre("remove", async function (next) {
  await Profile.deleteMany({ user: this._id });
  next();
});
const User = mongoose.model("User", userSchema);

module.exports = User;
