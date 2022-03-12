const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  isPromoted: { type: Boolean, default: null },
});

const Users = mongoose.model("user", postSchema);

module.exports = Users;
