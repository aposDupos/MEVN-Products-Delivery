const router = require("express-promise-router")();

const { street } = require("../controllers");

router.route("/:id").get(street.get);
router.route("/").post(street.create);
router.route("/").get(street.getAll);
router.route("/:id").put(street.update);
router.route("/:id").delete(street.delete);

module.exports = router;