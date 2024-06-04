const jwt = require("jsonwebtoken");
function generateAccessToken(user: any, role: string) {
  return jwt.sign({ userId: user.id, userRole: role }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: "1h",
  });
}

function generateTokens(user: any, role: any) {
  const accessToken = generateAccessToken(user, role);
  return {
    accessToken,
  };
}

module.exports = {
  generateAccessToken,
  generateTokens,
};
