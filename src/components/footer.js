import * as React from "react";
import "../styles.scss"

const social = [
    {
        platform: "Email",
        URL: "mailto:taydunworth@gmail.com",
        id: 1,
        icon: "fa-envelope"
    },
    {
        platform: "Codepen",
        URL: "URL",
        id: 2,
        icon: "fa-codepen"
    },
    {
        platform: "Github",
        URL: "URL",
        id: 3,
        icon: "fa-github"
    },
    {
        platform: "LinkedIn",
        URL: "URL",
        id: 4,
        icon: "fa-linkedin"
    },
    {
        platform: "Dribbble",
        URL: "URL",
        id: 5,
        icon: "fa-dribbble"
    },
]

const Footer = () => {
    return (
      <div>
          <span>Taylor Dunworth</span>
          <ul>
              {social.map(platform => (
              <li key={platform.id}>
                  <a href={platform.url} target="_blank">ICON</a>
              </li>
              ))}
          </ul>
          <hr />
          <p>Created with figma and react. <a href="https://github.com/taydunworth/taylor-dunworth-portfolio" target="_blank">Check out my code!</a></p>
          <p>Copyright 2021, Taylor Dunworth</p>
      </div>
    )
  }
  

export default Footer;
