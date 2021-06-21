import * as React from "react";
import Nav from "./nav.js";
import "../styles.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";
import { scroller } from 'react-scroll';

library.add(faLongArrowAltDown);

class Hero extends React.Component {
  scrollToElement() {
    scroller.scrollTo('about', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }
  
  render() {
    return (
    <div id="hero">
      <Nav />
      <div id="inner-hero">
          <h1 className="animate__animated animate__bounce">Hello, I'm Taylor.</h1>
          <hr />
          <p>I’m a ui/ux designer, who thrives on translating my user-centric interface designs into accessible, clean code.</p>
          <a to="about" onClick={() => this.scrollToElement()} className="arrow-link" >Get to Know Me<FontAwesomeIcon className="down-arrow" icon="long-arrow-alt-down" /></a>
        </div>
    </div>
    )
  }
}

export default Hero;
