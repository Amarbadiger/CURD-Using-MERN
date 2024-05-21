const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

app.use(express.json());

app.use(cors());
const userRoute = require("./routes/userRoute");
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("connected successfully ");
    app.listen(process.env.PORT || 5000, (err) => {
      if (err) console.log(err);
      console.log("server is running successfully at port ", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(userRoute);
