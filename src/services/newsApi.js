export const getArticles = (search) => {
  return fetch(
    `https://newsapi.org/v2/everything?q=${search}&
    language=en&
    pageSize=50&
    apiKey=369b68788e4a421781bd3b1562589dd2`.replace(/\s/g, '')
  )
    .then((res) => res.json())
    .then(({ articles }) =>
      articles.map((article) => ({
        title: article.title,
        url: article.url,
        image: article.urlToImage,
      }))
    );
};







// export const getArticles = () => {
//   // eslint-disable-next-line max-len
//   return fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=7d551fcd68214330940c22687391d7ab')
//     .then(res => res.json())
//     .then(json => json.articles);
// };
