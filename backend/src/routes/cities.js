const router = require("express-promise-router")();

const { city } = require("../controllers");

router.route("/:id").get(city.get);
router.route("/").post(city.create);
router.route("/").get(city.getAll);
router.route("/:id").put(city.update);
router.route("/:id").delete(city.delete);

module.exports = router;