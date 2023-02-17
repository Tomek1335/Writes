const postForm = document.querySelector('#post-form');
const postsContainer = document.querySelector('#posts');

function renderPosts() {
  postsContainer.innerHTML = '';
  posts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.innerHTML = `
      <p><strong>${post.author}</strong></p>
      <p>${post.message}</p>
    `;
    postsContainer.appendChild(postDiv);
  });
}

postForm.addEventListener('submit', e => {
  e.preventDefault();
  const author = postForm.author.value;
  const message = postForm.message.value;
  if (author && message) {
    posts.push({ author, message });
    renderPosts();
    postForm.reset();
  }
});

const posts = [
  { author: 'John', message: 'Hello, world!' },
  { author: 'Jane', message: 'Just posted my first tweet!' },
  { author: 'Bob', message: 'Feeling excited about the weekend!' },
];

renderPosts();
