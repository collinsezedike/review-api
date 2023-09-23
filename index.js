const express = require("express");
const mongoose = require("mongoose");
const router = require("./router");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use("/reviews", router);
app.get("/", (req, res) => {
  res.send("Review API 🚀🚀🚀");
});
mongoose
  .connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => console.log("Server is live"));
  })
  .catch((error) => {
    console.error(error);
  });
