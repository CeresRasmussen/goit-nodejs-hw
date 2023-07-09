const express = require("express");
const router = express.Router();

const { registration, login, getCurrent, logout } = require("../../controllers/auth");

const { validateFunc, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/user");

router.post("/registration", validateFunc(schemas.registrationSchema), registration);
router.post("/login", validateFunc(schemas.loginSchema), login);
router.get("/current", authenticate, getCurrent);
router.post("/logout", authenticate, logout);

module.exports = router;
