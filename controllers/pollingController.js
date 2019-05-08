const models = require("../models/index");

module.exports = {
  getPollings: async (req, res) => {
    try {
      const pollings = await models.pollings.findAll();
      res.status(200).send({
        message: `Get all pollings success`,
        data: pollings
      });
    } catch (error) {
      res.status(500).send({
        message: `Get Pollings error`
      });
    }
  },
  createPollings: async (req, res) => {
    try {
      const { question, timeLimit } = req.body;
      const polling = await models.pollings.create({
        question,
        timeLimit
      });
      res.status(200).send({
        message: `Polling has been create`,
        data: polling
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: `creates polling error`
      });
    }
  },
  updatePollings: async (req, res) => {
    try {
      const pollings = await models.pollings.findByPk(req.params.id);
      const { questions, timelimit } = req.body;
      await pollings.update(questions, timelimit);
      res.status(200).send({
        message: `Update Polling success`,
        data: pollings
      });
    } catch (error) {
      res.status(500).send({
        message: `update pollings error`
      });
    }
  },
  deletePollings: async (req, res) => {
    try {
      const pollings = await models.pollings.findByPk(req.params.id);
      await pollings.destroy();
      res.status(200).send({
        message: "delete success",
        data: pollings
      });
    } catch (error) {
      res.status(500).send({
        message: `Delete Pollings error`
      });
    }
  }
};
