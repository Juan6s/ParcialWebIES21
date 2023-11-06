export function createPost(title, description, url, id) {
  return `<div class="card gedf-card mx-auto p-2 mt-5 mb-5">
    <div class="card-header">
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex justify-content-between align-items-center">
          <div class="mr-2">
            <img
              class="rounded-circle"
              width="45"
              src="https://picsum.photos/50/50"
              alt=""
            />
          </div>
          <div class="ml-2">
            <div class="h5 m-0">@JFCarrizo</div>
            <div class="h7 text-muted">Juan Carrizo</div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="text-muted h7 mb-2">
        <i class="fa fa-clock-o"></i>10 min ago
      </div>
      <a class="card-link" href="#">
        <h5 class="card-title">
          ${title}
        </h5>
      </a>
      <img src="${url}" class="img-fluid" alt="failed to load">
      <p class="card-text">
        ${description}
      </p>
    </div>
    <div class="card-footer">
      <a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>
      <a href="#" class="card-link"><i class="fa fa-comment"></i> Comment</a>
      <a href="#" class="card-link"
        ><i class="fa fa-mail-forward"></i> Share</a
      >
    </div>
  </div>`;
}
