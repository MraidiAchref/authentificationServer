const mongoose = require("mongoose");

const { Schema } = mongoose;
const userSchema = new Schema(
  {
    email: {
      type: String,
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
    }
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.models.user || mongoose.model("user", userSchema);
