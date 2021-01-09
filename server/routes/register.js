const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

module.exports = (db) => {
  router.post("/", (req, res) => {
    const user = req.body;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const password = bcrypt.hashSync(user.password, 10);

    return db
      .query(
        `
    SELECT *
    FROM users
    WHERE email = $1;
    `,
        [email]
      )
      .then((data) => {
        if (data.rows.length > 0) {
          res.status(401).send("Email already exists");
        } else {
          db.query(
            `
        INSERT INTO users (first_name, last_name, email, password)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
        `,
            [first_name, last_name, email, password]
          )
            .then((data) => {
              const user = data.rows;
              res.json({
                user,
              });
            })
            .catch((err) => {
              res.status(500).json({
                error: err.message,
              });
            });
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
