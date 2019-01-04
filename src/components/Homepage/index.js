import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import Particles from 'react-particles-js';
import './index.css';
import {TweenMax, Power2, Back} from "gsap/TweenMax";
import Snap from 'snapsvg-cjs';
import Test from '../test/';

class Homepage extends Component {
  render() {
  return (
      <div className="Homepage">
          <div className="head-wrap">
            <Test />
            <img className="bird-wrapper" src={require('./Gang.svg')} />
          </div>
              <div className="wrapper">
                <div className="aboutme">
                  <h3><strong>About me!</strong></h3>
                  <img className="img-fluid img-thumbnail rounded-circle" style={{margin:"2%"}} src="https://media.licdn.com/dms/image/C5603AQHgfTPSnfUwkQ/profile-displayphoto-shrink_200_200/0?e=1548892800&v=beta&t=-dUV9LJP6szroSWQSagFMlKLGLdFm7MZCBWSGLNhQII"/>
                    <ul>Hi, my name is Phoenix! I am currently enrolled at a coding university called 42.</ul>
                    <ul>I’m studying to become a software engineer. We mainly use C, but I've become skilled at React and JS. Frontend Design has become second nature to me, and I'm proud to say I won a hackathon for Google with a couple of other students at my school! I have a lot of enthusiasm and potential, and I’m eager to tackle any opportunity!</ul>
                </div>
              </div>
              <div className="wrapper">
                <div className="projects">
                  <h2><strong>Portfolio!</strong></h2>
                    <ul>My Github is mostly filled with projects that are mostly written in C, but I learn something new everyday! Im always commiting and posting new projects to my Github!</ul>
                </div>
                  <div>
                    <p><strong>Fractol!</strong></p>
                      <ul>
                        Second project of the Graphic Branch of 42. Fractol is a project aimed at exploring fractals,
                        mathematical sets that exhibit a repeating pattern displayed at every scale
                      </ul>
                    <img className="img-fluid img-thumbnail" src="https://raw.githubusercontent.com/pbondoer/42-fractol/master/screens/screen.png"/>
                    <p><strong>FDF!</strong></p>
                      <ul>
                        First project of the Graphic Branch of 42. FDF is a simple 3D height-map renderer. You can rotate models,
                        color is defined by relative height in the map.
                      </ul>
                    <img className="img-fluid img-thumbnail" src="https://raw.githubusercontent.com/pbondoer/42-FdF/master/screens/screen.png"/>
                    <p><strong>Wolf3d!</strong></p>
                      <ul>
                        Third project of the Graphic Branch of 42. A Wolfeinstein-like renderer made in C using minilibX,
                        with textures, and basic map files.
                      </ul>
                    <img className="img-fluid img-thumbnail" src="https://raw.githubusercontent.com/pbondoer/42-wolf3d/master/screens/screen3.png"/>
                    </div>
                </div>
                    <div className="contactme">
                      <a href="https://linkedin.com"><i className="fa-2x fab fa-linkedin"><span>Linkedin</span></i></a>
                      <a href="https://www.github.com/phoenixtahoe"><i className="fa-2x fab fa-github"><span>Github</span></i></a>
                  </div>
        </div>
    );
  }
}

export default Homepage;
