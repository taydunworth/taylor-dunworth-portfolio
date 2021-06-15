import * as React from "react";
import Layout from "../components/layout.js";
import SpeakingEvents from "../components/speakingEvents";
import "../styles.scss"

// data
const projects = [
  {
    text: "100 Days of UI",
    url: "URL-1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
  },
  {
    text: "Navigation UI",
    url: "URL-2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
  },
  {
    text: "Parkner",
    url: "URL-3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
  },
  {
    text: "RJnet",
    url: "URL-4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
  },
  {
    text: "Digital Signage",
    url: "URL-5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
  },
  {
    text: "Financial Tombstones",
    url: "URL-6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
  },
  {
    text: "RJA Marketing Websites",
    url: "UR-7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
  },
]

const IndexPage = () => {
  return (
    <Layout>
        <main>
            <h1>Hello, I'm Taylor.</h1>
            <SpeakingEvents />
            <ul>
                {projects.map(project => (
                <li key={project.url}>
                    <span>
                    <a href={project.url}>
                        {project.text}
                    </a>
                    <p>{project.description}</p>
                    </span>
                </li>
                ))}
            </ul>
        </main>
    </Layout>
  )
}

export default IndexPage;
