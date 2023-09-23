const Review = require("./model");

const getAllReviews = async (req, res) => {
  try {
    const reviews = [];
    const reviewObjects = await Review.find();
    reviewObjects.forEach((reviewObject) => {
      const { reviewer, review, stars } = reviewObject;
      reviews.push({ reviewer, review, stars });
    });
    res.status(200).json({ status: "success", reviews });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

const addReview = async (req, res) => {
  try {
    const { reviewer, review, stars } = req.body;
    if (0 <= stars && stars <= 5) {
      const newReview = new Review({ reviewer, review, stars });
      await newReview.save();
      res
        .status(201)
        .json({ status: "success", message: "Review added successfully" });
    } else {
      res.status(400).json({
        status: "error",
        message: "Stars must be a number between 0 and 5",
      });
    }
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = {
  getAllReviews,
  addReview,
};
