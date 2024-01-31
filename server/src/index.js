require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3310;

app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);

app.get("/", (req, res) => {
  res.json({ message: "Hello World!!" });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on port %s`, PORT);
  }
});
