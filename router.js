const { Router } = require("express");
const { getAllReviews, addReview } = require("./controllers");

const router = Router();

router.route("/").get(getAllReviews).post(addReview);

module.exports = router;
