import * as React from "react";
import MobileNav from "../components/mobileNav";
import Nav from "../components/nav";
import Hero from "../components/hero";
import About from "../components/about";
import Buzzwords from "../components/buzzwords";
import Process from "../components/process";
import Community from "../components/community";
import Footer from "../components/footer";
import "../styles/styles.scss";
import "../styles/mobile.scss";
import 'animate.css';

const IndexPage = () => {
  return (
    <main>
        <MobileNav />
        <Nav />
        <Hero />
        <About />
        <Buzzwords />
        <Process />
        <Community />
        <Footer />
    </main>
  )
}

export default IndexPage;
