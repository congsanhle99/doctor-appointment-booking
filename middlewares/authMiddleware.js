const jwt = require("jsonwebtoken");

// 3 params
// - req: validate JWT token with request body
// because request body having token (in header) and will call NEXT method.
// - res:
// - next: will be call only token is valid

// every time midWare check token
// token is valid and validity(hợp lệ) -> mean not expired
module.exports = async (req, res, next) => {
  try {
    // use split(" "). because:
    // Authorization: "Bearer " + localStorage.getItem("token")
    // have 'space' at "Bearer " + localStorage.getItem("token")
    const token = req.headers["authorization"].split(" ")[1];
    // decoded: have user ID
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send({ message: "Auth failed", success: false });
      } else {
        req.body.userId = decoded.id;
        next();
      }
    });
  } catch (error) {
    return res.status(401).send({ message: "Auth failed", success: false });
  }
};
