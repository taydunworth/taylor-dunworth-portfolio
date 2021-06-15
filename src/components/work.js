import * as React from "react";
import Layout from "./layout";
import "../styles.scss";

const work = [
    { 
        name: "Project 1",
        id: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
    },
    { 
        name: "Project 2",
        id: 2,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
    },
    { 
        name: "Project 3",
        id: 3,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
    },
    { 
        name: "Project 4",
        id: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
    },
    { 
        name: "Project 5",
        id: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
    },
    { 
        name: "Project 6",
        id: 6,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
    },
    { 
        name: "Project 7",
        id: 7,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
    },
]

const Work = () => {
  return (
    <div id="work">
        <Layout>
            <h2>My Work</h2>
            <hr />
            <ul>
                {work.map(project => (
                <li key={project.id}>
                    <h3>{project.name}</h3>
                    <span>{project.description}</span>
                </li>
                ))}
            </ul>
        </Layout>
    </div>
  )
}

export default Work;
