const table = document.querySelector('.table__list');

function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      renderPosts(data);
    })
    .catch((error) => console.error(error));
};

fetchData();

// функция получения образа комментария
function getTemplate() {
  const template = document
    .querySelector(".table__template")
    .content.querySelector(".table__item")
    .cloneNode(true);
  return template;
}


// функция заполнения данных в новом комментарии
function generatePost(el) {
  const post = getTemplate();
  post.querySelector(".table__id").textContent = el.id;
  post.querySelector(".table__text").textContent = el.body;
  post.querySelector(".table__title").textContent = el.title;
  return post;
}

// функция рендеринга новых комментариев в списке
const renderPosts = (posts) => {
  console.log(posts);
  posts.forEach((item) => {
    table.append(generatePost(item));
  });
  // recalculateComments();
  // reorderComments();
};

