//from MVC mini project
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const blogRoutes = require("./blogRoutes");

//prefix all routes defined in userRoutes.js with /users
router.use("/users", userRoutes);
router.use("/blogs", blogRoutes);
// router.use("/", (req, res) => {
//   res.send("homepage");
// });

module.exports = router;
