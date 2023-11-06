import {
  savePost,
  deletePost,
  renderPosts,
} from "../../service/postService.mjs";

render();
const form = document.querySelector("#clase");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const url = document.querySelector("#url").value;
  const description = document.querySelector("#description").value;
  if (!title || !url) return;

  const id = savePost({ url, title, description });
  console.log(id);
  render();
});

function render() {
  document.querySelector("#postsC").innerHTML = renderPosts();
  const buttons = document.querySelectorAll(`.close`);
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      deletePost(button.id);
      render();
    });
  });
}
