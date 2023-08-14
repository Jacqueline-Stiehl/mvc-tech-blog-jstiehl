//from MVC mini project
const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
//const blogRoutes = require("./blogRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
//router.use("/blogs", blogRoutes);

module.exports = router;
