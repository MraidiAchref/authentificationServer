const UsersModel = require("./users.model");

exports.signUp = async (req, res) => {
  await UsersModel.create(req.body);
  return res.sendStatus(201);
};

exports.signIn = async (req, res) => {
  const user = await UsersModel.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (!user) {
    return res.sendStatus(404);
  }
  return res.status(200).json(user);
};
