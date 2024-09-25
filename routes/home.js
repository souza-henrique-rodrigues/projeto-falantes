const express = require("express");
const router = express.Router();
const database = require("../config/database");

router.get("/api/customers", (req, res) => {
  res.render("home", { pageTitle: "home page" });
});

router.get("/api/customers", async (req, res) => {
  const customer = await database.getAllCustomers();
  res.status(200).json({ customer });
});

module.exports = router;
