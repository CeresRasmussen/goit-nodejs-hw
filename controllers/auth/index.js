const { registration } = require("./registration");
const { login } = require("./login");
const { getCurrent } = require("./getCurrent");
const { logout } = require("./logout");
const { updateUserSubscriptionStatus } = require("./updateUserSubscriptionStatus");
const { updateUserAvatar } = require("./updateUserAvatar");
module.exports = {
  registration,
  login,
  getCurrent,
  logout,
  updateUserSubscriptionStatus,
  updateUserAvatar,
};
