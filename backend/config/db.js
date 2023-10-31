const mongoose = require("mongoose");
const config = require("./config");

const dbURL = config.db.url;

const connectDB = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log(`Mongodb Connected`);
  } catch (error) {
    console.log("Mongodb is not connected");
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
