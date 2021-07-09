const router = require("express-promise-router")();

const { testimonial } = require("../controllers");

router.route("/:id").get(testimonial.get);
router.route("/").post(testimonial.create);
router.route("/").get(testimonial.getAll);
router.route("/:id").put(testimonial.update);
router.route("/:id").delete(testimonial.delete);

module.exports = router;