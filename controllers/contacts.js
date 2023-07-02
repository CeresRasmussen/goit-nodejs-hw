const Contact = require("../models/contact");

// const HttpError = require("../helpers/HttpError");
const { controllerWrapper } = require("../helpers/controllerWrapper");

const getAll = async (req, res, next) => {
  const result = await Contact.find();
  res.json(result);
};

// const getContactById = async (req, res, next) => {
//   const { contactId } = req.params;
//   const result = await contacts.getContactById(contactId);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json(result);
// };

// const addContact = async (req, res, next) => {
//   console.log("req.body:", req.body);
//   const result = await contacts.addContact(req.body);
//   res.status(201).json(result);
// };

// const removeContact = async (req, res, next) => {
//   const { contactId } = req.params;
//   const result = await contacts.removeContact(contactId);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.status(200).json({ message: "contact deleted" });
// };

// const updateContact = async (req, res, next) => {
//   const { contactId } = req.params;

//   const result = await contacts.updateContact(contactId, req.body);
//   if (!result) {
//     throw HttpError(404, "Not Found");
//   }
//   res.json(result);
// };

module.exports = {
  getAll: controllerWrapper(getAll),
  // getContactById: controllerWrapper(getContactById),
  // addContact: controllerWrapper(addContact),
  // removeContact: controllerWrapper(removeContact),
  // updateContact: controllerWrapper(updateContact),
};
