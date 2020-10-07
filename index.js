const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
//import routes
const authRoute = require("./routes/auth.js");
dotenv.config();
//Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db!")
);

//Middlewares
app.use(express.json());

//Route middlewares
app.use("/api/user", authRoute);

app.listen(3000, () => console.log("Server up and running"));
