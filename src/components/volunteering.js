import React from "react";

const positions = [
    {
      org: "Women Who Code",
      position: "Tampa Chapter Co-Director",
      id: "v1",
      current: true,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
    },
    {
        org: "Tampa Bay Women's Tech Network",
        position: "Community Co-Organizer",
        id: "v2",
        current: true,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
    },
    {
        org: "Suncoast Developers Guild",
        position: "SDG Jr. Kids Class Co-Organizer and Instructor",
        id: "v3",
        current: true,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
    },
    {
        org: "Tampa Bay Startup Week",
        position: "Conference Organizer",
        id: "v4",
        current: false,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
    },
    {
        org: "Kappa Alpha Theta",
        position: "Eta Tau (University of Tampa) Advisor, Gamma (Butler University) Advisor",
        id: "v5",
        current: false,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
    },
]

const Volunteering = () => {
  return (
      <div>
        <h3>Volunteering</h3>
        <ul>
            {positions.map(position => (
            <li key={position.id}>
                <h4>{position.org}</h4>
                <h5>{position.position}</h5>
                <p>{position.description}</p>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default Volunteering;