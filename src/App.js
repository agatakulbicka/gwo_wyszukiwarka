// import PropTypes from "prop-types";
import React, {Component} from "react";import logo from './logo.svg';
import './App.css';
import Search from "./Search/SearchContainer";

class App extends Component {

    render() {
        const {store} = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Search store={store}/>
      </div>
    );
  }
}

export default App;
