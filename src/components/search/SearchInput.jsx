/* eslint-disable max-len */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { fetchNews } from '../../utils';


export default function SearchInput({ setArticles, setLoading }) {
  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchNews(input)
      .then((articles) => setArticles(articles.articles));
    setLoading(false);
        

    
  };
  const handleChange = ({ target }) => {
    setInput(target.value);
  };

  return (
    <form onSubmit = {handleSubmit}>
     
     
      <input type="text" placeholder="search" 
      onChange={handleChange}/>
      <button type="submit" >

            submit
      </button>
            
     
    </form>
  );
}

SearchInput.propTypes = {
  setArticles: PropTypes.func,
  setLoading: PropTypes.func

};



