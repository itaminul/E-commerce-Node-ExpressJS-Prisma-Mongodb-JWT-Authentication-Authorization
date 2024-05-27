const jwt = require("jsonwebtoken");
function generateAccessToken(user: any) {
  return jwt.sign({ userId: user.id }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: "1d",
  });
}

function generateTokens(user: any, jti: any) {
  const accessToken = generateAccessToken(user);
  return {
    accessToken,
  };
}

module.exports = {
  generateAccessToken,
  generateTokens,
};
