import * as React from "react";
import Hero from "../components/hero";
import About from "../components/about";
import Buzzwords from "../components/buzzwords";
import Process from "../components/process";
import Work from "../components/work";
import Community from "../components/community";
import Footer from "../components/footer";
import "../styles.scss"

const IndexPage = () => {
  return (
    <main>
        <Hero />
        <About />
        <Buzzwords />
        <Process />
        <Work />
        <Community />
        <Footer />
    </main>
  )
}

export default IndexPage;
