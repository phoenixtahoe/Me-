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
          <Test />
            <img className="bird-wrapper" src={require('./Gang.svg')} />
              <div className="wrapper">
                <div className="aboutme">
                  <h3><strong>About me!</strong></h3>
                  <img className="img-fluid img-thumbnail rounded-circle" style={{margin:"2%"}} src="https://media.licdn.com/dms/image/C5603AQHgfTPSnfUwkQ/profile-displayphoto-shrink_200_200/0?e=1548892800&v=beta&t=-dUV9LJP6szroSWQSagFMlKLGLdFm7MZCBWSGLNhQII"/>
                  <h3>My name is Phoenix David, </h3>
                  <h3>and I’m an aspiring computer programming student!</h3>
                    <ul>
                    I am currently enrolled at a coding University called 42. This extreme, progressive school is located in Fremont, CA and is modeled off a successful sister program in Paris. I began their Piscine (bootcamp) at the age of 17, and I finished in the top 10% of my cohort. Based on my performance, I was offered full time enrollment and housing at the university free of cost. I successfully challenged the California High School Proficiency Exam, so I could take advantage of this once-in-a-lifetime opportunity. I’m proud to say although I was the youngest cadet, I won a Google hackathon during my first month on campus.
                    </ul>
                    <ul>
                    I am eager to join an organization that can foster my enthusiasm for this field, so I can gain more experience and hone my skills.
                    Being part of 42’s challenging and competitive atmosphere has prepared me to be an individual who stands out and exceeds expectations. I am the ideal candidate for employment with organizations who are looking for that dynamic person who gets the job done! I have a killer work ethic and a growth mindset. I thrive on setting and achieving goals that others would hesitate to tackle. However I also am humble and know I have a lot to learn and am willing to begin on the ground floor.
                    </ul>
                </div>
              </div>
              <div className="wrapper">
                <div className="projects">
                  <h2><strong>Portfolio!</strong></h2>
                    <ul>
                    My Github is mostly filled with projects that are mostly written in C, but I learn something new everyday! Im always commiting and posting new projects to my Github!
                    </ul>
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
