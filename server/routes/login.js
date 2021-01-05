const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

module.exports = (db) => {
  router.post("/", (req, res) => {
    const email = req.body.user.email;

    return db
      .query(
        `SELECT id, first_name, last_name, email, phone_number, password
    FROM users
    WHERE email = $1;`,
        [email]
      )
      .then((data) => {
        if (bcrypt.compareSync(req.body.user.password, data.rows[0].password)) {
          const user = data.rows[0];
          res.json({
            user,
          });
        } else {
          res.status(401).send("Incorrect Email or Password");
        }
      })
      .catch((err) => {
        res.status(500).json({
          error: err.message,
        });
      });
  });

  return router;
};
