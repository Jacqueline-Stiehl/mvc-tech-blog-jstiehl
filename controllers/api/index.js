//from MVC mini project
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const blogRoutes = require("./blogRoutes");
const commentRoutes = require("./commentRoutes");

//prefix all routes defined in userRoutes.js with /users
router.use("/users", userRoutes);
router.use("/blogs", blogRoutes);
router.use("/comments", commentRoutes);
// router.use("/", (req, res) => {
//   res.send("homepage");
// });

module.exports = router;
