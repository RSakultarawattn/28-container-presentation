import React, { Component } from 'react';
import ArticleList from '../components/article/ArticleList';
import Searchinput2 from '../components/search/SearchInput2';
import { getArticles } from '../services/newsApi';

export default class NewsSearch extends Component {
    state = {
      search: 'horse',
      articles: [],
      loading: false,
    }

    componentDidMount() {
      this.fetchArticles();
    }
    
      fetchArticles = (search) => {
        this.setState({ loading: true });
        getArticles(search).then((articles) =>
          this.setState({ articles, loading: false })
        );
      };
    
      handleSearch = (event) => {
        event.preventDefault();
        this.fetchArticles(this.state.search);
        
      };
      handleChange = ({ target }) => {
        this.setState({ search: target.value });
      }
      render() {
        const { search, articles, loading } = this.state;
    
        return (
          <>
            <Searchinput2 search={search} 
              handleChange={this.handleChange} 
              onSubmit={this.handleSearch} />
            {loading && <h1>Loading</h1>}
            <ArticleList articles={articles} />
          </>
        );
      }
    
        
    
}

