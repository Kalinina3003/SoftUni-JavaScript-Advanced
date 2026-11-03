// Task: Next Article.
// Description: Create a closure that displays articles one by one
// inside the content element each time the returned function is called.

function getArticleGenerator(articles) {
    const content = document.getElementById('content');

    return function () {
        if (articles.length === 0) {
            return;
        }

        const article = document.createElement('article');
        article.textContent = articles.shift();

        content.appendChild(article);
    };
}
