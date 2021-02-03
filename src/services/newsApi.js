export const getArticles = () => {
  // eslint-disable-next-line max-len
  return fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=7d551fcd68214330940c22687391d7ab')
    .then(res => res.json())
    .then(json => json.articles);
};
