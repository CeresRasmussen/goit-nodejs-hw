const path = require("path");
const Jimp = require("jimp");
const fs = require("fs/promises");

const { User } = require("../../models/user");

const { controllerWrapper, HttpError } = require("../../helpers");

const avatarDir = path.join(__dirname, "../", "../", "public", "avatars");

const updateUserAvatar = async (req, res, next) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const filename = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarDir, filename);
  const avatarURL = path.join("avatar", filename);

  Jimp.read(tempUpload, (err, avatar) => {
    if (err) throw err;
    avatar
      .resize(250, 250) // resize
      .write(resultUpload); // save
  });
  await fs.rename(tempUpload, resultUpload);

  const result = await User.findByIdAndUpdate({ _id }, { avatarURL }, { new: true });
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.status(200).json({
    avatarURL,
  });
};

module.exports = {
  updateUserAvatar: controllerWrapper(updateUserAvatar),
};
