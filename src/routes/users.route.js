const router = require("express").Router();
const { UsersController } = require("../controllers");

router.get("/users", UsersController.getUsers);
router.get("/users/:id", UsersController.getOneUsers);
router.post("/users", UsersController.createUser);
router.put("/users", UsersController.updateUser);
router.delete("/users", UsersController.deleteUser);

module.exports = router;
