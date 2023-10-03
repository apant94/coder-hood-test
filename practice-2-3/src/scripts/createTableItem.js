const table = document.querySelector(".table__list");
const search = document.querySelector(".table__search");
const headers = document
  .querySelector(".table__headers")
  .querySelectorAll("li");

let dataPosts = [];
let renderedPosts = [];

function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      dataPosts = data;
      renderPosts(dataPosts);
    })
    .catch((error) => console.error(error));
}

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
  table.innerHTML = "";
  renderedPosts = posts;
  posts.forEach((item) => {
    table.append(generatePost(item));
  });
};

search.addEventListener("input", (e) => {
  const value = e.target.value.replace(/\s/g, "").toLowerCase();
  const filteredPosts = dataPosts.filter((post) => {
    return (
      post.title.replace(/\s/g, "").toLowerCase().includes(value) ||
      post.body.replace(/\s/g, "").toLowerCase().includes(value)
    );
  });
  if (value.length >= 3) {
    renderPosts(filteredPosts);
  } else {
    renderPosts(dataPosts);
  }
});

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const name = header.getAttribute("data-name");
    const order = header.getAttribute("data-order");
    header.setAttribute(
      "data-order",
      order === "increasing" ? "decreasing" : "increasing"
    );
    sortData(name, order);
  });
});

function sortData(keyData, order) {
  console.log(renderedPosts);
  const key = keyData; // ключ, по которому будем сортировать
  const sorted = renderedPosts.sort((user1, user2) => {
    if (order === "increasing") {
      return user1[key] > user2[key] ? 1 : -1;
    } else {
      return user1[key] < user2[key] ? 1 : -1;
    }
  });
  renderPosts(sorted);
}

fetchData();