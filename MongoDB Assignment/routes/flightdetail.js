const express = require("express")
const Router = express.Router()
const flightModel = require("../models/flightModel")
Router.get("/flightdetails", async (req, res) => {
  try {
    const result = await flightModel.find({})
    res.send(result)
  } catch (err) {
    res.send("err in ")
  }
})

module.exports = Router
