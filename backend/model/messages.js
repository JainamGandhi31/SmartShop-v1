const mongoose = require("mongoose");

const messagesSchema = new mongoose.Schema(
  {
    // 
    conversationId: {
      type: String,
    },
    text:{
      type: String,
    },
    sender: {
      type: String,
    },

    // if anyone uploads images in the chat
    images: [
        {
            type: String,
        }
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Messages", messagesSchema);