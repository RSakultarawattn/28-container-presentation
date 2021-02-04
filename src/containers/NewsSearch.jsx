import React, { Component } from 'react';
import { render } from 'react-dom';
import SearchInput from '../components/search/SearchInput';
import { getArticles } from '../services/newsApi';

export default class NewsSearch extends Component {
    state {
        articles [],
        query: ''
    }

    componentDidMount() {
        getArticles(this.state.query)
        .then(console.log)
        .then(articles => this.setState({ articles }))
    }

        handleChange = ({ target }) => {
            this.setState({ query: target.value });
        }
        render() {
            const { articles, query } = this.state;
            return (
                <section>
                    <SearchInput
                    query={query}
                    onHandleChange={this.handleChange}
                    />
                </section>
            )
        }
    
        
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default NewsSearch;