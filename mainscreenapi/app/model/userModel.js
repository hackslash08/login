const mongoose = require("mongoose");
const Schema = mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String },
  email: { type: String },
  password: { type: String },
  passwordResetToken: String,
  passwordResetExpires: String,
  company: { type: String },
  isVerified: { type: Boolean, default: true },
});

const UserModel = mongoose.model("user", Schema);
module.exports = UserModel;
