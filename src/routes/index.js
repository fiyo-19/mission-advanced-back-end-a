const router = require("express").Router();
const usersRouter = require("./users.route");

router.use("/api", usersRouter);

module.exports = router;
