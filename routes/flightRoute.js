const express = require("express");

const router = express.Router();
const controller = require("../controllers/flightController");

router
  .get("/", controller.getFlights)
  .get("/:id", controller.getFlight)
  .post("/", controller.CreateFlight)
  .put("/:id", controller.Updateflight)
  .delete("/:id", controller.deleteFlight);
module.exports = router;
