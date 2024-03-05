const mongoose = require("mongoose");
mongoose
  // localhost ki jagh 0.0.0.0 use kra h
  .connect("mongodb://0.0.0.0:27017/olympics", {})
  .then(() => {
    console.log("connection succesfull with database");
  })
  .catch((err) => {
    console.log("Not connected", err);
  });
