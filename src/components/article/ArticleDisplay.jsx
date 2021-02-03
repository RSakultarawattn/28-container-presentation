import React from 'react';
import PropTypes from 'prop-types';

const ArticleDisplay = ({ title, author, description }) => (
  <div
    data-testid="display"
    // eslint-disable-next-line max-len
    style={{ color: title, backgroundColor: author, width:'50rm', height: '50rm' }}>
    <p style={{ fontsize: '5rem' }}>{description}</p>
  </div>
);

ArticleDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ArticleDisplay;