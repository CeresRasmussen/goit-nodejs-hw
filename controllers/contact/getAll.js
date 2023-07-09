const { Contact } = require("../../models/contact");

const { controllerWrapper } = require("../../helpers");

const getAll = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 5 } = req.query;
  const skip = (page - 1) * limit;
  // "-createdAt -updatedAt" - параметри, які не дозволяють повернення відповідних полів користувачу службової інфи
  const result = await Contact.find({ owner }, "-createdAt -updatedAt", { skip, limit });
  res.json(result);
};

module.exports = {
  getAll: controllerWrapper(getAll),
};
