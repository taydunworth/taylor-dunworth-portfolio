import * as React from "react";
import Layout from "../components/layout";
import Nav from "../components/nav";
import Hero from "../components/hero";
import About from "../components/about";
import Buzzwords from "../components/buzzwords";
import Process from "../components/process";
import Work from "../components/work";
import SpeakingEvents from "../components/speakingEvents";
import Volunteering from "../components/volunteering";
import Footer from "../components/footer";
import "../styles.scss"

const IndexPage = () => {
  return (
    <Layout>
        <main>
            <Nav />
            <Hero />
            <About />
            <Buzzwords />
            <Process />
            <Work />
            <SpeakingEvents />
            <Volunteering />
            <Footer />
        </main>
    </Layout>
  )
}

export default IndexPage;
