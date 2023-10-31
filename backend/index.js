// Imports
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const config = require("./config/config");
const connectDB = require("./config/db");

const app = express();
const PORT = config.app.port;
dotenv.config();
connectDB();

// CORS enables controlled access to resources located outside of a given domain
const cors = require("cors");
app.use(cors());

// bodyParser enables access to data from json and form
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
const booksRoutes = require("./routes/booksRouter.js");

app.use("/api/books", booksRoutes);

// Starting Server
app.listen(PORT, () => {
  console.log(`Server is running at : http://127.0.0.1:${PORT}`);
});
