const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  authorId: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  timeCreate: {
    type: Date,
    default: Date.now,
  },
  timeStart: {
    type: Date,
  },
  timeEnd: {
    type: Date,
  },
  selectors: [
    {
      contentSelector: {
        type: String,
      },
      descriptionContentSelector: {
        type: String,
      },
    },
  ],
  typeContent: {
    type: String,
  },
});

const ContentVoting = mongoose.model("ContentVoting", userSchema);

module.exports = ContentVoting;
