const newCommentHandler = async (event) => {
  event.preventDefault();

  const blog_id = document.querySelector(".blog-id").getAttribute("id");
  const content = document.querySelector("#text-new-comment").value.trim();

  if (blog_id && content) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ blog_id, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.replace("/blog/" + blog_id);
    } else {
      alert("Failed to add comment.");
    }
  }
};

document
  .querySelector("#new-comment")
  .addEventListener("click", newCommentHandler);
