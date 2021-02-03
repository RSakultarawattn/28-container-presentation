import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, author, description }) => (
  <figure>
    <figcaption>{title}</figcaption>
    <figcaption>{author}</figcaption>
    <figcaption>{description}</figcaption>
  </figure>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Article;
