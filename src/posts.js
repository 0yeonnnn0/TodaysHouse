// $변수 -> DOM object
const $postsContainer = document.querySelector('.posting-container');

const post = {};

async function fetchPosts() {
    const response = await fetch('http://localhost:1234/posts');
    const data = await response.json();
    return data;
}

const getPostTemplate = (post) => {
    return `
      <a href="/detail.html?id=${post.id}">
      <div class="posting-wrapper">
        <div class="posting-image-container">
          <img
            src="${post.image}"
            alt="게시글 이미지"
          />
        </div>
        <h2 class="">${post.title}</h2>
        <div class="profile-wrapper">
          <div class="profile-image-container">
            <img
              class="profile-image"
              src="${post.authorImage}"
              alt="profile-image"
            />
          </div>
          <span class="profile-nickname">${post.author}</span>
        </div>
      </div>
    `;
  };

fetchPosts().then((posts) => {
    console.log(posts); // length가 6인 Array 형태 
    console.log(typeof posts);
    // join을 안 해준 상태라면 "," 같은 불필요한 문자열이 들어가므로 join 해준다. 
    $postsContainer.innerHTML = posts.map((post) => getPostTemplate(post)).join("");
})
