const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// This route is used for user's login purpose

module.exports = (db) => {

  router.post("/", (req, res) => {
    const email = req.body.user.email;
    console.log('email' , email);

    return db.query(`SELECT id, first_name, last_name, email, password
    FROM users
    WHERE email = $1;`, [email])
      .then((data) => {
        console.log('data', data)
        if (bcrypt.compareSync(req.body.user.password, data.rows[0].password)) {
          const user = data.rows[0];
          console.log('user', user);
          res.json({
            user
          });
        } else {
          res.status(401).send("Incorrect Email or Password");
        }
      })
      .catch((err) => {
        res.status(500).json({
          error: err.message
        });
        console.log('error' , err);
      });
  });

  return router;

};
