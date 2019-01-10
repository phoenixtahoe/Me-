import React, { Component } from 'react';
import './App.css';
import Homepage from "./components/Homepage/";
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Wrap">
          <BrowserRouter>
            <Switch>
              <Route
                path="/"
                exact
                component={Homepage}
              />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
