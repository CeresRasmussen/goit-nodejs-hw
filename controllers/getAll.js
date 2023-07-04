const { Contact } = require("../models/contact");

const { controllerWrapper } = require("../helpers");

const getAll = async (req, res, next) => {
  const result = await Contact.find();
  res.json(result);
};

module.exports = {
  getAll: controllerWrapper(getAll),
};
