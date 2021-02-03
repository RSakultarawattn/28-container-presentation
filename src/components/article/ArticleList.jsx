import React from 'react';
import propTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ articles }) => {
  const articleElements = articles.map(article => ( 
    <>
      <li>
        <Article {...article} />
      </li>
    
    </>
  ));
  return (
    <ul>
      {articleElements}
    </ul>
  );
};
ArticleList.propTypes = {
  articles: propTypes.arrayOf(propTypes.shape({
    title: propTypes.string.isRequired,
    author: propTypes.string.isRequired,
    description: propTypes.string.isRequired
  })).isRequired
};
export default ArticleList;



