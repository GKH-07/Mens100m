const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens");

//we will handle POST request
router.post("/", async (req, res) => {
  try {
    const addingMensRecords = new MensRanking(req.body);
    console.log(req.body);
    //this save is returning us data, so we have to make it await
    const insertMens = await addingMensRecords.save();
    res.status(201).send(insertMens);
  } catch (e) {
    res.status(400).send(e);
  }
});

// GET request
router.get("/", async (req, res) => {
  try {
    const getMens = await MensRanking.find({}).sort({ ranking: 1 });
    res.send(getMens);
  } catch (e) {
    res.status(400).send(e);
  }
});

// GET request for individual
router.get("/:name", async (req, res) => {
  try {
    const _id = req.params.name;
    const getMenByid = await MensRanking.findById(_id);
    res.send(getMenByid);
  } catch (e) {
    res.status(400).send(e);
  }
});

// PATCH -> update
router.patch("/:name", async (req, res) => {
  try {
    const _id = req.params.name;
    const getMenByid = await MensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getMenByid);
  } catch (e) {
    res.status(500).send(e);
  }
});

// DELETE Req
router.delete("/mens/:id", async (req, res) => {
  try {
    const getMen = await MensRanking.findByIdAndDelete(req.params.id);
    res.send(getMen);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
