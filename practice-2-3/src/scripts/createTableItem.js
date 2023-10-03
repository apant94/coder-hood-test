const table = document.querySelector('.table__list');
const search = document.querySelector('.table__search')
let dataposts = [];

function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      dataposts = data;
      renderPosts(dataposts);
    })
    .catch((error) => console.error(error));
};

// функция получения образа поста
function getTemplate() {
  const template = document
    .querySelector(".table__template")
    .content.querySelector(".table__item")
    .cloneNode(true);
  return template;
}


// функция заполнения данных в посте
function generatePost(el) {
  const post = getTemplate();
  post.querySelector(".table__id").textContent = el.id;
  post.querySelector(".table__text").textContent = el.body;
  post.querySelector(".table__title").textContent = el.title;
  return post;
}

// функция рендеринга постов в списке
const renderPosts = (posts) => {
  table.innerHTML = '';
  posts.forEach((item) => {
    table.append(generatePost(item));
  });
};

search.addEventListener('input', (e) => {
  const value = e.target.value.replace(/\s/g, '').toLowerCase();
  const filteredPosts = dataposts.filter((post) => {
    return post.title.replace(/\s/g, '').toLowerCase().includes(value) || post.body.replace(/\s/g, '').toLowerCase().includes(value);
  })
  if (value.length >= 3) {
    renderPosts(filteredPosts);
  } else {
    renderPosts(dataposts);
  }
})

fetchData();

