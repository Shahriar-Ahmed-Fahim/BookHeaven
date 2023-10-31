const Books = require("../models/bookModel");

const getAllBooks = async (req, res) => {
  try {
    const AllBook = await Books.find();
    res.status(200).send({
      success: true,
      message: "Retured all products",
      count: AllBook.length,
      data: AllBook,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      message: error.message,
    });
  }
};

const getOneBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Books.findById(id);
    res.status(200).send({
      success: true,
      message: "Retured one products",
      data: book,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      message: error.message,
    });
  }
};

const createBook = async (req, res) => {
  try {
    const { name, author, publishYear } = req.body;

    if (!name || !author || !publishYear) {
      res.status(400).json({
        message: "Send all required fields",
      });
    }

    const newBook = {
      name,
      author,
      publishYear,
    };

    const book = await Books.create(newBook);
    res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const { name, author, publishYear } = req.body;
    if (!name || !author || !publishYear) {
      res.status(400).send({
        message: "Send all required fields",
      });
    }

    const { id } = req.params;
    const result = await Books.findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
      res.status(404).json({ message: "Book not found" });
    }

    res.status(200).send({
      message: "Book updated successfully",
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      message: error.message,
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Books.findByIdAndDelete(id);

    if (!result) {
      res.status(404).json({ message: "Book not found" });
    }

    res.status(200).send({
      message: "Book delete successfully",
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      message: error.message,
    });
  }
};

module.exports = {
  getAllBooks,
  getOneBook,
  createBook,
  updateBook,
  deleteBook,
};
