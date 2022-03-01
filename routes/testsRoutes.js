const express = require("express");
const router = express.Router();
const controller = require("../controller/test");
const asyncHandler = require("../helpers/asyncHandler");

router.get(
  "/test/:id",
  asyncHandler(async (req, res) => {
    const Id = req.params.id;

    try {
      const data = await controller.getTestById(Id);

      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  })
);
router.get(
  "/list",
  asyncHandler(async (req, res) => {
    const data = await controller.getAllTests();

    res.send(data);
  })
);

router.post(
  "/test/add",
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.addTest(req.body);
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  })
);

router.put(
  "/editTest",
  asyncHandler(async (req, res) => {
    try {
      const data = await controller.editTest(req.body);
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  })
);

module.exports = router;
