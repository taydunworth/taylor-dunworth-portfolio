import * as React from "react";
import "../styles.scss"

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
    <div>
        <h2>My Ideal Process</h2>
        <ul>
            {process.map(step => (
            <li key={step.id}>
                <h3>{step.title}</h3>
                <span>{step.description}</span>
            </li>
            ))}
        </ul>
        <a href="">See My Process in Action</a>
    </div>
  )
}

export default Process;
