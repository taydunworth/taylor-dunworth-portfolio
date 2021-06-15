import * as React from "react";
import Layout from "./layout";
import "../styles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faLongArrowAltDown);

const About = () => {
  return (
    <div id="about">
      <Layout>
        <h2>I’m a designer who can code.</h2>
        <p>I’m a UI/UX designer and front-end developer based in sunny St. Petersburg, Florida with affinities for cups of tea, Disney, and kind people.</p>
        <p>My specialties include intuitive, inclusive design and development and creating resonance for users through simplicity.</p>
        <p>I grew up in small-town Indiana with professional endeavors landing me in Indianapolis, New York City, and presently Tampa Bay, Florida. My experience ranges from agency work specializing in marketing and web development to product work with a focus in interfaces for mobile and web applications.</p>
        <p>I’m passionate about brand design and incorporate brand strategy and consistency into all of my work to provide users with the ultimate experience.</p>
        <a className="arrow-link" href="">Learn My Process<FontAwesomeIcon className="down-arrow" icon="long-arrow-alt-down" /></a>
      </Layout>
    </div>
  )
}

export default About;
