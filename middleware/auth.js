const JWT = require("jsonwebtoken");



const auth = (req, res, next) => {
  const token = req.body.token||req.headers["x-access-token"];

  if (!token) {
    return res.status(403).json({error:" authentication failed"});
  }
  try {
    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
  } catch (err) {
    return res.status(401).json({error:"Invalid user"});
  }
  return next();
};

module.exports = auth;