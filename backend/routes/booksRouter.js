const express = require("express");
const router = express.Router();

const {
  getAllBooks,
  getOneBook,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/booksController");

router.get("/", getAllBooks);
router.post("/", createBook);
router.get("/:id", getOneBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
