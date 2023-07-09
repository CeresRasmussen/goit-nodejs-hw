const { Contact } = require("../../models/contact");

const { controllerWrapper } = require("../../helpers");

const addContact = async (req, res, next) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

module.exports = {
  addContact: controllerWrapper(addContact),
};
