import express from "express";

import { Book } from "../models/bookModels.js";

const router = express.Router()

// create another book
router.post("/Books", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "send all required fields: title , author , publishYear",
      });
    }
    const newbook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    const book = await Book.create(newbook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(400).send({ message: error.message });
  }
});

// get all books
router.get("/Books", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

//get book based on its id
router.get("/Books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    return res.status(200).json(book);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

// update the content of a book
router.put("/Books/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "send all required fields: title , author , publishYear",
      });
    }
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: err.message });
  }
});

//delete a book from the list
router.delete("/Books/:id", async (req, res) => {
  try {
    // if(
    //     !req.body.title ||
    //     !req.body.author ||
    //     !req.body.publishYear
    // ) {
    //     return res.status(400).send({
    //         message : "send all required fields: title , author , publishYear"
    //     });
    // }
    const { id } = req.params;
    const resultat = await Book.findByIdAndDelete(id);

    if (!resultat) {
      return res.status(404).json({ message: "not deleted" });
    }
    return res.status(200).json({ message: "deleted with seccess" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
});


export default router ;