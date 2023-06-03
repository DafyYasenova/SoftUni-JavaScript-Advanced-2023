function getArticleGenerator(articles) {

    let allArticles = articles;
    // взимаме референция към масива

    // при клик на бутона Show , да се връща функцията
    return () => { 
        if (allArticles.length > 0) {
            let content = document.getElementById('content');
            let currentArticle = allArticles.shift();
            let newArticles = document.createElement('article');
            newArticles.textContent = currentArticle;
            content.appendChild(newArticles);
        }
    };
}
