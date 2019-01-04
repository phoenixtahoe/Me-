import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import Particles from 'react-particles-js';
import {TweenMax, Power2, TimelineMax, Back} from "gsap/TweenMax";
import Snap from 'snapsvg-cjs';
import svg from "./Phoenix.svg";
import './index.css';

export default class svgDiv extends Component {
		svgRender() {
	    let element = Snap(this.svgDiv);
	    Snap.load(svg, function(data){
	      if (element) {
	        element.append(data);
	      }
	      var letterSpeed = 5; //higher = faster
	      var colorSpeed = 1; //higher = faster
	      let colors = [
	        '#e9edef', '#EE7752', '#E73C7E', '#23A6D5', '#23D5AB'
	      ];
	      let letters = Snap.selectAll('.letter');
	      let tl = new TimelineMax({
	        repeat: 0,
	        yoyo: true
	      });

	      for (var i = 0; i < letters.length; i += 1) {
	        var letter = letters[i];

	        tl.set(letter.node, {
	          rotation: 180 - (Math.random() * 360),
	          x: 20,
	          y: -200
	        }, 0);

	        var tw = TweenMax.to(letter.node, 0.6, {
	          rotation: 0,
	          x: 0,
	          y: 0,
	          ease: Back.easeOut
	        });

	        tl.add(tw, 0.5 + (i / letterSpeed));

	        var paths = letter.selectAll('*');
	        for (var k = 0; k < paths.length; k += 1) {
	          for (var j = 0; j < colors.length; j += 1) {

	            var l = paths[k].clone();
	            l.attr({
	              stroke: colors[j]
	            });

	            var delay = (0.1 + (i / letterSpeed) + ((colors.length - (j / colorSpeed))) / 10);
	            var tw = TweenMax.fromTo(l.node, 1, {
	              drawSVG: '0%'
	            }, {
	              drawSVG: '100%',
	              ease: Power2.easeInOut
	            });
	            tl.add(tw, delay);

	          }

	          //paths[k].remove();
	          letter.prepend(paths[k]);
	          TweenMax.set(paths[k].node, {
	            x: -3,
	            y: -3
	          });
	          var tw = TweenMax.fromTo(paths[k].node, 1, {
	            drawSVG: '0%'
	          }, {
	            drawSVG: '100%',
	            ease: Power2.easeInOut
	          });
	          tl.add(tw, delay);

	        }

	      }
	    });
	  }
	  componentDidMount() {
	    this.svgRender();
	  }
	  componentDidUpdate() {
	    this.svgRender();
	  }
	  render() {
	    return  <div ref={d=>this.svgDiv=d} />
	  }
	}
