const router = require('express').Router();

//import contact controller
const {login,register, forgotPassword,resetPassword}=require("../controller/authController")
router.route("/register").post(register)
router.route("/login").post(login)
router.route("/forgotpassword").post( forgotPassword)
router.route("/resetpassword/:userId/:token").post( resetPassword)


module.exports = router;