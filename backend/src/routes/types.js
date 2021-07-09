const router = require("express-promise-router")();

const { type } = require("../controllers");

router.route("/:id").get(type.get);
router.route("/").post(type.create);
router.route("/").get(type.getAll);
router.route("/:id").put(type.update);
router.route("/:id").delete(type.delete);

module.exports = router;