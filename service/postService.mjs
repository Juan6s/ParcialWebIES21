import { createPost } from "../components/post.mjs";
export function savePost({ url, title, description }) {
  const posts = localStorage.getItem("posts");

  if (posts) {
    const parsedPosts = JSON.parse(posts);

    const id = parsedPosts[parsedPosts.length - 1].id + 1;
    var data = [];
    for (const post of parsedPosts) {
      data.push(post);
    }
    data.push({ url, title, description, id });
    localStorage.setItem("posts", JSON.stringify(data));
    return { url, title, description, id };
  }

  var data = [];
  data.push({ url, title, description, id: 1 });
  localStorage.setItem("posts", JSON.stringify(data));
  return { url, title, description, id: 1 };
}

export function deletePost(id) {
  const posts = localStorage.getItem("posts");
  if (posts) {
    const parsedPosts = JSON.parse(posts);
    var data = [];
    for (const post of parsedPosts) {
      if (post.id != id) {
        data.push(post);
      }
    }
    localStorage.setItem("posts", JSON.stringify(data));
  }
}

export function renderPosts() {
  const posts = localStorage.getItem("posts");
  if (posts) {
    const parsedPosts = JSON.parse(posts);

    var data = "";
    for (const post of parsedPosts) {
      data += createPost("aca", "aca", "aca", 2);
    }
    return data;
  }
}
