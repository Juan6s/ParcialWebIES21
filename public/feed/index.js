import { post } from "../../components/post.mjs";

const postsContainer = document.querySelector("#postsC");
console.log(postsContainer);
postsContainer.innerHTML = post("aca", "aca2", "aca3");
