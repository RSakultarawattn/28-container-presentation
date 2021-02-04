import React from 'react';
import Article from './Article';
import PropTypes from 'prop-types';


export default function ArticleList({ articles }) {
    console.log('THIS IS A CONSOLE LOG', articles);
    return (
      <ul>
        {articles.map((article) => (
          <li key={article.id + Date.now()}>
            <Article article={article} />
          </li>
        ))}
      </ul>
    );
  }
  ArticleList.propTypes = {
    articles: PropTypes.array,
  };