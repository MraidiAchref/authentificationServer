const UsersModel = require("./users.model");
const jwt = require("../lib/jwt");

exports.signUp = async (req, res) => {
  await UsersModel.create(req.body);
  const accessToken = jwt.generateAccessToken({ email: req.body.email });

  const refreshToken = jwt.generateRefreshToken({ email: req.body.email });
  return res.status(200).json({ accessToken, refreshToken });
};

exports.signIn = async (req, res) => {
  var user = await UsersModel.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (!user) {
    return res.sendStatus(404);
  }
  const accessToken = jwt.generateAccessToken({ email: req.body.email });
  const refreshToken = jwt.generateRefreshToken({ email: req.body.email });

  return res.status(200).json({ user, accessToken, refreshToken });
};

exports.udpateUser = async (req, res) => {
  if (req.user.email == req.body.email) {
    const updatedDocument = await UsersModel.findOneAndUpdate(
      { email: req.body.email },
      req.body,
      {
        new: true,
      }
    );
    if (!updatedDocument) return res.status(404);
    else return res.status(200).json(updatedDocument);
  }
  throw new Error("UNAUTHORIZED");
};

exports.refreshToken = (req, res) => {
  const newToken = jwt.generateAccessToken({ email: req.user.email });
  return res.status(200).json({ accesToken: newToken });
};
