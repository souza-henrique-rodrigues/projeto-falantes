const express = require("express");
const router = express.Router();

router.get("/admin/api/customers", (req, res) => {
  res.render("admin", { pageTitle: "admin page" });
});

router.delete("/admin/api/customers/:id", async (req, res) => {
  try {
    const customerID = req.params.id;
    const deletedCustomer = await database.deleteCustomer(customerID);
    return res.status(200).json({ message: "Customer has been deleted" });
  } catch (error) {
    console.log(error);
  }
});

router.post("/admin/api/customers", async (req, res) => {
  try {
    const { nome, tel, descricaoServico, valorServico } = req.body;
    const customer = await database.createCustomer(
      nome,
      tel,
      descricaoServico,
      valorServico
    );
    res.status(201).json({ sucess: "user created", customer });
  } catch (error) {
    res.status(500).json({ error: "something went wronng" });
  }
});

router.patch("/admin/api/customers/:id", async (req, res) => {
  const customerID = req.params.id;
  const customerName = req.body.nome;
  if (!customerID) {
    res.status(500).json({ error: "something went wrong" });
  }
  try {
    const newName = await database.updateName(customerName, customerID);
    res.json({ sucess: "user edited correctly" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
