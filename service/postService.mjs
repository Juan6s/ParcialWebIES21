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
    return id;
  }

  var data = [];
  data.push({ url, title, description, id: 1 });
  localStorage.setItem("posts", JSON.stringify(data));
  return 1;
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
    if (data.length != 0) {
      localStorage.setItem("posts", JSON.stringify(data));
    } else {
      localStorage.clear();
    }
  }
}

export function renderPosts() {
  const posts = localStorage.getItem("posts");
  if (posts) {
    const parsedPosts = JSON.parse(posts);

    var data = "";
    for (const post of parsedPosts) {
      data += createPost(post.title, post.description, post.url, post.id);
    }
    return data;
  }
  return "";
}
