import React, { Component } from 'react';
import { MyComponent } from '../../components';
import { SearchGithub } from '../../components';

import './index.css';

const App = ({ children, history }) => {
  return (
      <div className = 'main-container'>
      <nav className = 'navbar navbar-default' role = 'navigation'>
      <div className = 'col-sm-7 col-sm-offset-2' style = {{ marginTop: 15}}>
      <SearchGithub history = { history } />
      </div>
      </nav>
        <div className = 'container'>
          { children }
        </div>
      </div>
  )
};

//class App extends Component {
//  constructor(props) {
//    super(props);
//  }
//
//  render() {
//    return (
//      <div>
//        <h1> content from App Component</h1>
//        { this.props.children }
//      </div>
//    );
//  }
//}

export default App;
