import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  IndexRoute,
  Link,
  browserHistory
} from 'react-router';


import Header from './components/pageBlocks/Header/Header'
import './styles/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
        <div>
          <Router history={browserHistory}>
            <Route path='/' component={Header}>
            </Route>
          </Router>
        </div>
    );
  }
}

export default App;
