const express = require("express");
const router = express.Router();
const controller = require("../controller/question");
const asyncHandler = require("../helpers/asyncHandler");

router.get(
  "/question/list",
  asyncHandler(async (req, res) => {
    const data = await controller.getAllQuestions();

    res.send(data);
  })
);

router.get(
  "/question/:id",
  asyncHandler(async (req, res) => {
    const Id = req.params.id;

    try {
      const data = await controller.getQuestionById(Id);

      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  })
);

router.post(
  "/question/add",
  asyncHandler(async (req, res) => {
    try {
      console.log(req.body);
      console.log(req.params);
      const data = await controller.addQuestion(req.body);
      res.status(200).send(data);
    } catch (err) {
      res.status(401).send(err);
    }
  })
);

router.put(
  "/editQuestion",
  asyncHandler(async (req, res) => {
    // const Id = req.params.id;
    try {
      console.log(req.body);
      const data = await controller.editQuestion(req.body);

      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  })
);

module.exports = router;
