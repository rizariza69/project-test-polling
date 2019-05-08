const router = require("express").Router();
const Controller = require("../controllers/usersController");

router.post("/register", Controller.register);
router.post("/login", Controller.login);
router.get("/", Controller.getUser);
router.put("/:id", Controller.updateUser);

module.exports = router;
