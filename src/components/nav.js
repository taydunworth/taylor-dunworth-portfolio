import * as React from "react";
import Layout from "./layout";
import "../styles.scss";
import { scroller } from 'react-scroll';

class Nav extends React.Component {
  scrollToElement(location) {
    scroller.scrollTo(location, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }
  
  render() {
    return (
      <nav>
        <Layout>
          <div>
            <span className="logo">Taylor Dunworth</span>
            <ul>
                <li><a to="about" onClick={() => this.scrollToElement("about")}>About</a></li>
                <li><a to="work" onClick={() => this.scrollToElement("work")}>Work</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a to="community" onClick={() => this.scrollToElement("community")}>Community</a></li>
                <li><a href="#about">Contact</a></li>
            </ul>
          </div>
        </Layout>
      </nav>
    )
  }
}

export default Nav;
