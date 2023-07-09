const express = require("express");
const router = express.Router();

const { registration, login } = require("../../controllers/auth");

const { validateFunc } = require("../../middlewares");

const { schemas } = require("../../models/user");

router.post("/registration", validateFunc(schemas.registrationSchema), registration);
router.post("/login", validateFunc(schemas.loginSchema), login);

module.exports = router;
