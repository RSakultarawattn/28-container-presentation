import React from 'react';
import PropTypes from 'prop-types';

export default function Article({ article }) {
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.author}</p>
      <p>{article.content}</p>
    </div>
  );
}
Article.propTypes = {
  article: PropTypes.object,
};
