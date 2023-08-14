//based off of MVC mini project:
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

    // if (response.ok) {
    //   document.location.replace("/profile");
    // } else {
    //   alert("Failed to create blog entry");
    // }
  }
};

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute("data-id")) {
//     const id = event.target.getAttribute("data-id");

//     const response = await fetch(`/api/blogs/${id}`, {
//       method: "DELETE",
//     });

//     if (response.ok) {
//       document.location.replace("/profile");
//     } else {
//       alert("Failed to delete blog entry");
//     }
//   }
// };

document
  .querySelector("#new-comment")
  .addEventListener("click", newCommentHandler);

//   document
//     .querySelector(".blog-list")
//     .addEventListener("click", delButtonHandler);
