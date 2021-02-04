import React from 'react';
import PropTypes from 'prop-types';
//import getArticles from '../../services/newsApi';


function Searchinput2({ onSubmit, search, handleChange }) {
  return (
    <form onSubmit = {onSubmit}>
      <input type={search} placeholder="type words here" 
      onChange={ handleChange }/>

      <button type="submit">

                submit
      </button>

    </form>
  );
}

Searchinput2.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired  

};

export default Searchinput2;

