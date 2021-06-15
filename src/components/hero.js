import * as React from "react";
import Nav from "./nav.js";
import Layout from "./layout.js";
import "../styles.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faLongArrowAltDown);

const Hero = () => {
  return (
    <div id="hero">
      <Nav />
      <Layout>
        <div id="inner-hero">
            <h1>Hello, I'm Taylor.</h1>
            <hr />
            <p>I’m a ui/ux designer, who thrives on translating my user-centric interface designs into accessible, clean code.</p>
            <a className="arrow-link" href="">Get to Know Me<FontAwesomeIcon className="down-arrow" icon="long-arrow-alt-down" /></a>
          </div>
        </Layout>
    </div>
  )
}

export default Hero;
