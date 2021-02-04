import React from 'react';
import PropTypes from 'prop-types';
//import styles from './Article.css';

const Article = ({ title, url, image }) => (
  <a className={Article} href={url}>
    <figure>
      <img src={image} alt={title} />
      <figcaption>{title}</figcaption>
    </figure>
  </a>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default Article;


// import React from 'react';
// import PropTypes from 'prop-types';

// export default function Article({ article }) {
//   return (
//     <div>
//       <h1>{article.title}</h1>
//       <p>{article.author}</p>
//       <p>{article.content}</p>
//     </div>
//   );
// }
// Article.propTypes = {
//   article: PropTypes.object,
// };
