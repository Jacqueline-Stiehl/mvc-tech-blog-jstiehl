const handleUpdateForm = async (event) => {
  const blog_id = document.querySelector(".blog-id").getAttribute("id");

  const content = document
    .querySelector(`#blog-content-${blog_id}`)
    .value.trim();
  const title = document.querySelector(`#blog-title-${blog_id}`).value.trim();

  console.log(`
    ${title}
    ${content}
    `);

  const response = await fetch(`/api/blogs/${blog_id}`, {
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
    //alert("Update successful!!");
    document.location.replace("/profile");
  } else {
    alert("Unable to edit the blog entry.");
  }
};

const formsDiv = document.querySelector(".blog-list");
formsDiv.addEventListener("submit", function (event) {
  event.preventDefault();
  if (event.target.matches("form")) {
    handleUpdateForm(event);
  }
});

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/blogs/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete blog entry");
    }
  }
};

document
  .querySelector(".blog-list")
  .addEventListener("click", delButtonHandler);
