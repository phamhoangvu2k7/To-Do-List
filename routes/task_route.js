const express = require("express");
const router = express.Router();
const controller = require("../controller/task_controller");

router.get("/", controller.index);

router.get("/create", controller.create);

router.post("/create", controller.createPost);

router.get("/detail/:taskId", controller.detail);

module.exports = router;