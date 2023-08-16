//based off of MVC mini project:
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

const updateBlogEntryHandler = async (event) => {
  event.preventDefault();
  console.log("hello");

  //const content = document.querySelector("#blog-content").value.trim();
  //const title = document.querySelector("#blog-title").value.trim();

  return console.log("title");
};

//I moved below from comment.js:
const handleUpdateForm = async (event) => {
  const blog_id = event.target.getAttribute("data-id");

  const content = document
    .querySelector(`#blog-content-${blog_id}`)
    .value.trim();
  const title = document.querySelector(`#blog-title-${blog_id}`).value.trim();

  console.log(`
  ${title}
  ${content}
  `);

  //   window.location gives us access to the URL.
  //   We then use the .split() method to access the number at the
  //   end of the URL and set that equal to id.

  // const id = window.location.toString().split("/")[
  //   window.location.toString().split("/").length - 1
  // ];

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
    alert("Update successful!!");
  } else {
    alert("Unable to edit the blog entry.");
  }
};

//this one was working:
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

const formsDiv = document.querySelector(".blog-list");
formsDiv.addEventListener("submit", function (event) {
  event.preventDefault();
  if (event.target.matches("form")) {
    handleUpdateForm(event);
  }
});

// document
//   .querySelector(".update-blog123")
//   .addEventListener("submit", updateBlogEntryHandler);

// document
//   .querySelector(".new-blog-form")
//   .addEventListener("submit", newFormHandler);

document
  .querySelector(".blog-list")
  .addEventListener("click", delButtonHandler);

//////////////////////////////////////////////////////
//based off of MVC activity #10:
//I moved this to comment.js
// const updateCommentHandler = async (event) => {
//   event.preventDefault();

//   const blog_id = document.querySelector(".blog-id").getAttribute("id");
//   const content = document.querySelector("#blog-comment").value.trim();

// window.location gives us access to the URL.
//We then use the .split() method to access the number at the
//end of the URL and set that equal to id.

//   const response = await fetch(`/api/profile/${id}`, {
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
//     document.location.replace(`/profile/${id}`);
//   } else {
//     alert("Unable to edit the blog entry.");
//   }
// };

// document
//   .querySelector("#update-comment")
//   .addEventListener("submit", updateCommentHandler);

/////////////////////////////////////////////////////////
