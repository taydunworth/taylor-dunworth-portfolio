import * as React from "react";
import Layout from "./layout";
import "../styles.scss";

const Nav = () => {
    return (
      <nav>
        <Layout>
          <div>
            <span className="logo">Taylor Dunworth</span>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#community">Community</a></li>
                <li><a href="#about">Contact</a></li>
            </ul>
          </div>
        </Layout>
      </nav>
    )
  }
  

export default Nav;
