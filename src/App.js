import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Test from './components/test/';
import Homepage from "./components/Homepage/";
import {TweenMax, Power2, TimelineMax, Back, TimelineLite} from "gsap/TweenMax";
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import Snap from 'snapsvg-cjs';
import * as d3 from "d3";



class App extends Component {
  constructor(props){
  super(props);
  this.myTween = new TimelineLite({paused: true});
  this.myElements = [];
}

componentDidMount(){
  this.myTween.staggerTo(this.myElements, 0.5, {y: 0, autoAlpha: 1}, 0.1);
}
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
