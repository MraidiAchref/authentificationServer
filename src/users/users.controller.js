const UsersModel = require("./users.model");
const jwt = require("../lib/jwt");
const bcrypt = require('bcrypt') ;
const sendEmail = require('../utils/email')
const crypto = require('crypto')


exports.signUp = async (req, res) => {
  req.body.password =  await bcrypt.hash(req.body.password , 10) ;
  await UsersModel.create(req.body);
  const accessToken = jwt.generateAccessToken({ email: req.body.email });

  const refreshToken = jwt.generateRefreshToken({ email: req.body.email });
  return res.status(200).json({ accessToken, refreshToken });
};

exports.signIn = async (req, res) => {
  var user = await UsersModel.findOne({
    email: req.body.email,

  });

  if (!user || ! await bcrypt.compare(req.body.password , user.password)) {
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


exports.forgotPassword = async (req, res , next )  => {
    // get the user 
    const user = await  UsersModel.findOne({email : req.body.email})
    if (!user ) return res.sendStatus(404);

    //generate reset token 
    const resetPassword = user.createResetPassword() ;
    user.save() ;
    //send token back
    const resetUrl = `${req.protocol}://${req.get('host')}/users/resetPassword/${resetPassword}`
    const message = `Please use the bellow link to reset your password.\n\n${resetUrl}\n\nPlease take note that this password is available only for 10 min` 

    try{
      await sendEmail({
        email: user.email ,
        subject: "Password change request" , 
        message: message 
      });

      return res.status(200).json({
        status: 'success',
        message: 'password reset link was sent to the client via email'
      })
      
    }catch(err) {
      user.resetPassword = undefined ;
      user.resetPasswordExpires = undefined;
      user.passwordChangeAt = undefined ; 
      user.save() ; 
      
      return res.status(500) ;
    }

}

exports.resetPassword = async ( req, res , next ) => {

  const hashedResetPassword = crypto.createHash('sha256').update(req.params.resetPassword).digest('hex');
  const user = await UsersModel.findOne({resetPassword: hashedResetPassword , resetPasswordExpires: {$gt: Date.now() }}) ; 

  if(!user) return res.status(404) ;
  if ( req.body.password == req.body.confirmPassword) {
    user.password = await bcrypt.hash(req.body.password , 10)
    user.resetPasswordExpires = undefined ;
    user.resetPassword = undefined ; 
    user.passwordChangeAt = Date.now() ; 

    await user.save() ; 
    return res.status(200).json({
      status: "Password changed successfully ",
      newPassword : req.body.password
    }) ; 

  }
  return res.status(400).json({
    status: "Failed",
    message: "Please confirm password correctly"
  })


}