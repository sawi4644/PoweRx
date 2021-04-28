// authenticateToken.js
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountENV");

console.log("A", serviceAccount)

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
async function decodeIDToken(req, res, next) {
  console.log("Hello");
  const header = req.headers?.authorization;
  if (
    header !== "Bearer null" &&
    req.headers?.authorization?.startsWith("Bearer ")
  ) {
    const idToken = req.headers.authorization.split("Bearer ")[1];
    console.log(idToken, "this is idToken");
    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      req["currentUser"] = decodedToken;
    } catch (err) {
      console.log(err);
      return res.status(401).send("Invalid token");
    }
  } else {
    return res.status(401).send("No token found");
  }

  next();
}
module.exports = decodeIDToken;
