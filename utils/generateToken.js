const jwt = require("jsonwebtoken");

if (!process.env.JWT) {
  throw new Error("JWT is not defined in environment variables");
}

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT, {
    expiresIn: "1d",
  });
};

module.exports = generateToken;
