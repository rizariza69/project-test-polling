const models = require("../models/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  register: async (req, res) => {
    try {
      const salt = bcrypt.genSaltSync(7);
      req.body.password = bcrypt.hashSync(req.body.password, salt);

      const users = await models.users.create(req.body);

      res.status(200).send({
        message: `create success`,
        data: users
      });
    } catch (error) {
      console.log(error);

      res.status(500).send({
        message: `create error`
      });
    }
  },
  login: async (req, res) => {
    try {
      const user = await models.users.findOne({
        where: { email: req.body.email }
      });

      if (user === null) return res.send("User not found");

      const token = jwt.sign(
        {
          id: user.id,
          email: user.email
        },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );

      res.status(200).send({
        message: `Login success`,
        token: token
      });
    } catch (error) {
      console.log(error);

      res.status(500).send({
        message: `login error`
      });
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await models.users.findAll();
      return res.status(200).send({
        message: `get user success`,
        data: user
      });
    } catch (error) {
      res.status(500).send({
        message: `get user error`
      });
    }
  },
  updateUser: async (req, res) => {
    try {
      const users = await models.users.findByPk(req.params.id);
      await users.update({
        fullName: req.body.fullName,
        username: req.body.username,
        email: req.body.email
      });
      console.log(users);

      res.status(200).send({
        message: `update success`,
        data: users
      });
    } catch (error) {
      res.status(500).send({
        message: `update error`
      });
    }
  },
  deleteUSer: async (req, res) => {
    try {
      const users = await models.users.findByPk(req.params.id);
      await users.destroy();
      res.status(200).send({
        message: `Delete user success`,
        data: users
      });
    } catch (error) {
      res.status(500).send({
        message: `Delete User`
      });
    }
  }
};
