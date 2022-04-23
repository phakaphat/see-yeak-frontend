const express = require("express");
const router = express.Router();
const { admin, auth } = require("../util/admin");
const { signInWithEmailAndPassword } = require("firebase/auth");

router.post("/login", async (req, res) => {
    const body = {
      email: req.body.email,
      password: req.body.password,
    };
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        body.email,
        body.password
      );
      res.cookie("Hackathon", user.user.uid);
      return res.send({ uid: user.user.uid });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  });
  
  router.post("/logout", async (req, res) => {
    res.clearCookie("Hackathon");
    return res.send("Logout Success");
  });
  
  router.post("/signup", async (req, res) => {
    const body = {
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword
    };
    try {
      if (body.password.length >= 6) {
          if (body.password === body.confirmPassword) {
            const user = await admin
            .auth()
            .createUser({ email: body.email, password: body.password });
            res.cookie("Hackathon", user.uid);
            await admin.firestore().collection("user").doc(user.uid).set(req.body)
            return res.send({ uid: user.uid });
          } else {
              return res.send("Your password does not equal with confirm password");
          }
      } else {
        return res.send("Password need at least 6 characters");
      }
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  });

exports.default = router;