const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    reviewer: {
      type: String,
      require: true,
    },
    review: {
      type: String,
      require: true,
    },
    stars: {
      type: Number,
      min: 0,
      maz: 5,
    },
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
