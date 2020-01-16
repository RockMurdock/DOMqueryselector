const articleHeader = document.querySelector(".article__header").textContent = "Welcome to the Cody Murdock blog";
  
const allArticleHeaders = document.querySelectorAll(".article__header");
for (let i = 0; i < allArticleHeaders.length; i++) {
    allArticleHeaders[i].className = "article__header important"  
}

const dashClasses = document.querySelector(".dashed");
dashClasses.classList.remove("dashed");

const goldenrodClass = document.querySelector(".article__footer");
goldenrodClass.className = "article__footer goldenrod";
