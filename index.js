

const url =
  "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=55c1b3d50765400f8805b10bb24b6768";
window.onload = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      for (let i = 0; i < 10; i++)
        document.getElementById("showData").innerHTML += JSON.stringify(`<div class="card" style="text-align:center"><img src=${data.articles[i].urlToImage} class="img-thumbnail img-fluid" style='height:100px;' alt="..."><div class="card-body"><h5 class="card-title">${data.articles[i].author}</h5><p class="card-text">${data.articles[i].description}</p></div><ul class="list-group list-group-flush"><li class="list-group-item">${data.articles[i].title}</li><li class="list-group-item">${data.articles[i].content}</li><li class="list-group-item">${data.articles[i].publishedAt}</li></ul><div class="card-body"><a href='${data.articles[i].url}' class="card-link">${data.articles[i].url}</a></div></div>`);
    });
};



