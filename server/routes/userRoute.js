const express = require("express");
const router = express.Router();
const user = require("../models/userModel");

// This method adds the details POST method
router.post("/", async (req, res) => {
  //Destrcutring
  const { name, email, age } = req.body;

  try {
    const userAdded = await user.create({
      name: name,
      email: email,
      age: age,
    });

    res.status(201).json(userAdded);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

// This GET method display all the details

router.get("/", async function (req, res) {
  try {
    const showAll = await user.find();
    res.status(200).json(showAll);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// This GET method displays single user

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await user.findOne({ _id: id });
    res.status(200).json(singleUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// This Delete Method will delete the single user
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await user.findOneAndDelete({ _id: id });
    res.status(200).json(singleUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const { name, email, age } = req.body;
  try {
    const updateUser = await user.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateUser);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

//This Patch Method helps to update or edit the user

module.exports = router;
