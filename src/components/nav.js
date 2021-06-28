import * as React from "react";
import "../styles/styles.scss";
import { scroller } from 'react-scroll';
import Resume from "../images/Taylor-Dunworth-Resume.pdf";

const Nav = () => {
  const scrollToElement = () => {
    scroller.scrollTo('about', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <section id="navigation">
      <div>
        <span className="logo">Taylor Dunworth</span>
        <nav aria-label="Main Navigation">
          <ul>
            <li><button to="about" role="link" onClick={() => scrollToElement("about")}>About</button></li>
            <li><a href={Resume} target="_blank" rel="noreferrer">Resume</a></li>
            <li><button to="community" role="link" onClick={() => scrollToElement("community")}>Community</button></li>
            <li><a href="mailto:taydunworth@gmail.com">Contact</a></li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Nav;
