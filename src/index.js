import * as serviceWorker from './serviceWorker';
import React, { Component } from 'react';
import { render } from 'react-dom';
import './css/style.css';
import SimpleTween from "./animation.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="container">
        <SimpleTween />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
