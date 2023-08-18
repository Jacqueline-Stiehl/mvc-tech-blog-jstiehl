const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#blog-title").value.trim();
  const content = document.querySelector("#blog-content").value.trim();

  if (title && content) {
    const response = await fetch(`/api/blogs`, {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create blog entry");
    }
  }
};

// const updateBlogEntryHandler = async (event) => {
//   event.preventDefault();
//   console.log("hello");

//   return console.log("title");
// };

//I moved below from comment.js:
// const handleUpdateForm = async (event) => {
//   const blog_id = event.target.getAttribute("data-id");

//   const content = document
//     .querySelector(`#blog-content-${blog_id}`)
//     .value.trim();
//   const title = document.querySelector(`#blog-title-${blog_id}`).value.trim();

//   console.log(`
//   ${title}
//   ${content}
//   `);

//   const response = await fetch(`/api/blogs/${blog_id}`, {
//     method: "PUT",
//     body: JSON.stringify({
//       title,
//       content,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   if (response.ok) {
//     //alert("Update successful!!");
//     document.location.replace("/profile");
//   } else {
//     alert("Unable to edit the blog entry.");
//   }
// };

//add a comment; moved to comment.js
// const newCommentHandler = async (event) => {
//   event.preventDefault();

//   const blog_id = document.querySelector(".blog-id").getAttribute("id");
//   const content = document.querySelector(".new-comment").value.trim();

//   if (blog_id && content) {
//     const response = await fetch(`/api/blog/${blog_id}`, {
//       method: "POST",
//       body: JSON.stringify({ blog_id, content }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     if (response.ok) {
//       document.location.replace("/profile");
//     } else {
//       alert("Failed to add comment.");
//     }
//   }
// };

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

// const formsDiv = document.querySelector(".blog-list");
// formsDiv.addEventListener("submit", function (event) {
//   event.preventDefault();
//   if (event.target.matches("form")) {
//     handleUpdateForm(event);
//   }
// });

document
  .querySelector(".new-blog-form")
  .addEventListener("submit", newFormHandler);

// document
//   .querySelector(".blog-list")
//   .addEventListener("click", delButtonHandler);

// document
//   .querySelector(".new-comment")
//   .addEventListener("submit", newCommentHandler);
