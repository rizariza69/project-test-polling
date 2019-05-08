const router = require("express").Router();
const Controller = require("../controllers/pollingController");

router.get("/", Controller.getPollings);
router.post("/", Controller.createPollings);
router.put("/:id", Controller.updatePollings);
router.delete("/:id", Controller.deletePollings);

module.exports = router;
