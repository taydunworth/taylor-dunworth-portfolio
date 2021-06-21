import * as React from "react";
import Layout from "./layout";
import "../styles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faGithubAlt, faLinkedinIn, faDribbble } from '@fortawesome/free-brands-svg-icons';

const social = [
    {
        platform: "Codepen",
        url: "https://codepen.io/taylordunworth",
        id: 2,
        icon: faCodepen,
    },
    {
        platform: "Github",
        url: "https://github.com/taydunworth",
        id: 3,
        icon: faGithubAlt,
    },
    {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/taydunworth/",
        id: 4,
        icon: faLinkedinIn,
    },
    {
        platform: "Dribbble",
        url: "https://dribbble.com/taydunworth",
        id: 5,
        icon: faDribbble,
    },
]

const Footer = () => {
    return (
      <div id="footer">
        <Layout>
            <div className="flex">
                <span className="logo">Taylor Dunworth</span>
                <ul>
                    {social.map(platform => (
                    <li key={platform.id}>
                        <a href={platform.url} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={platform.icon} />
                        </a>
                    </li>
                    ))}
                </ul>
            </div>
            <div>
                <hr />
                <p>Created with Figma and React/Gatsby. <a href="https://github.com/taydunworth/taylor-dunworth-portfolio" target="_blank" rel="noreferrer">Check out my code!</a></p>
                <p>Copyright 2021, Taylor Dunworth</p>
            </div>
        </Layout>
      </div>
    )
  }
  

export default Footer;
