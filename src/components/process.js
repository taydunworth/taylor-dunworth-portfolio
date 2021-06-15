import * as React from "react";
import Layout from "./layout";
import "../styles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faLongArrowAltDown);

const process = [
    { 
        title: "Kickoff",
        id: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
    },
    { 
        title: "Research",
        id: 2,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
    },
    { 
        title: "Plan",
        id: 3,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
    },
    { 
        title: "Design",
        id: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
    },
    { 
        title: "Test",
        id: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
    },
    { 
        title: "Develop",
        id: 6,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
    },
    { 
        title: "Test (Again)",
        id: 7,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
    },
    { 
        title: "Celebrate",
        id: 8,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
    },
]

const Process = () => {
  return (
    <div id="process">
        <Layout>
            <h2>My <span className="script">Ideal</span> Process</h2>
            <ul>
                {process.map(step => (
                <li key={step.id}>
                    <h3>{step.title}</h3>
                    <span>{step.description}</span>
                </li>
                ))}
            </ul>
            <a className="arrow-link" href="">See My Process in Action<FontAwesomeIcon className="down-arrow" icon="long-arrow-alt-down" /></a>
        </Layout>
    </div>
  )
}

export default Process;
