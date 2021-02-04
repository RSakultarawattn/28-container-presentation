export const fetchNews = (search) => {
  return fetch(
    'http://newsapi.org/v2/everything?' +
        `q=${search}&` +
        'from=2021-02-03&' +
        'sortBy=popularity&' +
        'apiKey=f09c7b1f498e4eec8a35aa25da9ac3a1'
  ).then((data) => data.json());
};
