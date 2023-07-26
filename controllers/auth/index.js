const { registration } = require("./registration");
const { login } = require("./login");
const { getCurrent } = require("./getCurrent");
const { logout } = require("./logout");
const { updateUserSubscriptionStatus } = require("./updateUserSubscriptionStatus");
const { updateUserAvatar } = require("./updateUserAvatar");
const { verifyEmail } = require("./verifyEmail");
const { resendVerifyEmail } = require("./resendVerifYEmaol");
module.exports = {
  registration,
  login,
  getCurrent,
  logout,
  updateUserSubscriptionStatus,
  updateUserAvatar,
  verifyEmail,
  resendVerifyEmail,
};
