const newPostForm = document.querySelector("#newPostForm");

const createNewPost = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#newPostTitle").value.trim();
  const content = document.querySelector("#newPostContent").value.trim();

  if (title && content) {
    const response = await fetch(`/api/post`, {
      method: "POst",
      body: JSON.stringify({
        title,
        content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    }
  }
};

newPostForm.addEventListener("click", createNewPost);
