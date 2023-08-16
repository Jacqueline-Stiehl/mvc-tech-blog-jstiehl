//based off of MVC mini project:
//added to profile.js
const newCommentHandler = async (event) => {
  event.preventDefault();

  const blog_id = document.querySelector(".blog-id").getAttribute("id");
  const content = document.querySelector("#blog-comment").value.trim();

  if (blog_id && content) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ blog_id, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};

document
  .querySelector("#new-comment")
  .addEventListener("click", newCommentHandler);
