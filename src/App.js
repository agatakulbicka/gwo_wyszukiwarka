import React, {Component} from "react";
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.scss';
import "./styles/styles.scss"
import {SearchContainer} from "./Search/index";

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
          <SearchContainer store={store}/>
      </div>
    );
  }
}

export default App;
