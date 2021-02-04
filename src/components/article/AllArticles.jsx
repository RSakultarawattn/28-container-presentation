import React, { useState } from 'react';
import ArticleList from './ArticleList';
import SearchInput from '../search/SearchInput';


export default function AllArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
    
  
  return (
    <>
      <SearchInput setArticles = {setArticles} setLoading = {setLoading}/>
      <ArticleList articles={articles} />
    </>

  );
    
}
