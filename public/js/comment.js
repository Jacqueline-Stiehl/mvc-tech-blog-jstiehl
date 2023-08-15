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
  }
};

//I moved below from profile.js:
const updateBlogEntryHandler = async (event) => {
  event.preventDefault();

  const blog_id = document.querySelector(".blog-id").getAttribute("id");
  const content = document.querySelector("#update-blog-content").value.trim();
  const title = document.querySelector("#update-blog-title").value.trim();

  // window.location gives us access to the URL.
  //We then use the .split() method to access the number at the
  //end of the URL and set that equal to id.

  const response = await fetch(`/api/blog/${blog_id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace(`/blog/${id}`);
  } else {
    alert("Unable to edit the blog entry.");
  }
};

document
  .querySelector("#update-blog")
  .addEventListener("submit", updateBlogEntryHandler);

document
  .querySelector("#new-comment")
  .addEventListener("click", newCommentHandler);
