//based off of MVC mini project:
//I updated on 8-11-23
const User = require("./user");
const Blog = require("./blog");
const Comment = require("./comments");

User.hasMany(Blog, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Blog.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Blog, {
  foreignKey: "blog_id",
});

Blog.hasMany(Comment, {
  foreignKey: "blog_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

module.exports = { User, Blog, Comment };

//need a model to store comment in database
//use model in commentRoute; get by id and post comments (post id and userid);
//fetch post and corresponding comments
//comment belongs to blog and user
//Post can have many comments
//comment belongs to one user
//user can have many comments
//comment can belong to one post
