const express = require("express");
const router = express.Router();
const controller = require("../controllers/clientController");

router.get("/", controller.getHome);
router.get("/clients", controller.getClients);
router.get("/clients/:id", controller.getClientById);

module.exports = router;
