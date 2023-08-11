//from MVC mini project:
//I updated on 8-11-23
const User = require("./User");
const Blog = require("./Blog");

User.hasMany(Blog, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Blog.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Blog };
