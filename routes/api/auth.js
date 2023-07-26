const express = require("express");
const router = express.Router();

const {
  registration,
  login,
  getCurrent,
  logout,
  updateUserSubscriptionStatus,
  updateUserAvatar,
  verifyEmail,
  resendVerifyEmail,
} = require("../../controllers/auth");

const { validateFunc, authenticate, upload } = require("../../middlewares");

const { schemas } = require("../../models/user");

router.post("/registration", validateFunc(schemas.registrationSchema), registration);

router.get("/verify/:verificationToken", verifyEmail);

router.get("/verify", validateFunc(schemas.emailSchema), resendVerifyEmail);

router.post("/login", validateFunc(schemas.loginSchema), login);

router.get("/current", authenticate, getCurrent);

router.post("/logout", authenticate, logout);

router.patch(
  "/",
  authenticate,
  validateFunc(schemas.updateSubscriptionSchema),
  updateUserSubscriptionStatus
);

router.patch("/avatar", authenticate, upload.single("avatar"), updateUserAvatar);

module.exports = router;
