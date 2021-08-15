// hYRlnNxzKT0l7MUC11Ypo9kH3A3kmoX3H49ans1t68BUCyj1iVDFV2WOzpwf
// Grab the news container
let newsAccordion = document.getElementById("newsAccordion");
//Initialize the news api parameters
let source = "us";
let apiKey = "hYRlnNxzKT0l7MUC11Ypo9kH3A3kmoX3H49ans1t68BUCyj1iVDFV2WOzpwf";
let lang = "en";
let number = "5";
// Create an AJAX get request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://gnewsapi.net/api/search?q=covid-19&country=${source}&language=${lang}&limit=${number}&api_token=${apiKey}`,
  true
);
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = "";
    articles.forEach(function (element, index) {
      let news = `
<div class="card">
<div class="card-header" id="heading${index}">
  <h2 class="mb-0">
    <button class="btn btn-link collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}"> <b>Breaking News${
        index + 1
      }:</b>${element["title"]}</button>
  </h2>
</div>
<div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
  <div class="card-body">${element["description"]}.<a href="${
        element["source_url"]
      }" target="_blank">Read more here</a></div>
</div>
</div>`;
      newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
  } else {
    console.log("some error occured");
  }
};
xhr.send();
