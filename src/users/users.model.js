const mongoose = require("mongoose");
const crypto = require("crypto");

const { Schema } = mongoose;
const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    age: {
      type: Number,
    },
    name: {
      type: String,
    },
    lastName: {
      type: String,
    },
    passwordChangeAt: {
      type: Date,
    },
    resetPassword: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.createResetPassword =  function()  {
  const resetPassword = crypto.randomBytes(16).toString("hex");
  this.passwordChangeAt = Date.now() ;
  this.resetPassword = crypto.createHash("sha256").update(resetPassword).digest("hex");
  this.resetPasswordExpires = Date.now() + 10*60*1000 ; 
  

  return resetPassword ; 
};
module.exports = mongoose.models.user || mongoose.model("user", userSchema);
