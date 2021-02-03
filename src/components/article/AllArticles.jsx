import React, { Component } from 'react';
import { getArticles } from '../../services/newsApi';

export default class AllArticles extends Component {
    state = {
      articles: []
    }

    componentDidMount() {
      getArticles()
        .then(articles => this.setState({ articles }));
    
    }

    render() {
      const { articles } = this.state;

      return (
        <ArticleList articles={articles} />

      );
    }
}
