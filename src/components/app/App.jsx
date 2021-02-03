import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import AllArticles from '../article/AllArticles';

export default class Articles extends Component {

  render() {

    return (
      <div>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <AllArticles {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
// export default function App() {
//   return <h1>Hello World</h1>;
// }
