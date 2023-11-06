import {
  savePost,
  deletePost,
  renderPosts,
} from "../../service/postService.mjs";

document.querySelector("#postsC").innerHTML = renderPosts();
