import React from "react";

function CurrentOrPast(props) {
  const isCurrent = props.isCurrent;
  if (isCurrent) {
    return (
      <div className="current-pill">
        <span>Current</span>
      </div>
    );
  } else {
    return (
      <div className="past-pill">
          <span>Past</span>
      </div>
    );
  }
}

const positions = [
    {
      org: "Women Who Code",
      position: "Tampa Chapter Co-Director",
      id: "v1",
      current: true,
      description:
        "Women Who Code provides a community for women in technology with in-person and virtual events focused on professional growth in the technology industry, technical skills, and networking. As the director for the Tampa chapter, I collaborate with two other directors to plan and host events for 1,000+ members.",
    },
    {
        org: "Suncoast Developers Guild",
        position: "SDG Jr. Kids Class Co-Organizer and Instructor",
        id: "v2",
        current: true,
        description:
          "Suncoast Developers Guild hosts Kids Academy classes one night per week for a four week period teaching kids ages 8-12 fundamentals of HTML structure, the box model, CSS, typography, JavaScript, and programming. Along with organizing teaching aids, Taylor works with the other two co-organizers to develop curriculum, create sample projects, and instruct the students.",
    },
    {
        org: "Tampa Bay Startup Week",
        position: "Conference Organizer – Web Development Track Captain",
        id: "v3",
        current: false,
        description:
          "Tampa Bay Startup Week is a volunteer-lead celebration of innovation and entrepreneurship in Tampa Bay. Within the five-day event, attendees have access to speakers on topics such as public relations, marketing, tech, and social media. Responsibilities in this volunteer role included event scheduling, selecting and communicating with speakers, and managing social media promotions for the web development speaker sessions. Sessions for 2019 included 'Inclusive Design and Development with Web Accessibility,' 'Women Transforming Tech,' 'So You Want to be a Freelance Web Developer?,' and 'Component Libraries.'",
    },
    {
        org: "Kappa Alpha Theta",
        position: "Eta Tau (University of Tampa) Advisor, Gamma (Butler University) Advisor",
        id: "v4",
        current: false,
        description:
          "Kappa Alpha Theta is an international Greek-letter fraternity for women. My involvement was advising undergraduate/active members/officers of the Eta Tau chapter (University of Tampa) of Kappa Alpha Theta on topics such as academic development (both personally and as a collective group), new member education, and continued member education.",
    },
]

const Volunteering = () => {
  return (
      <div id="volunteering">
        <h3>Volunteering</h3>
        <ul>
            {positions.map(position => (
            <li key={position.id}>
              <h4>{position.org}</h4>
              <CurrentOrPast isCurrent={position.current} />
              <h5>{position.position}</h5>
              <p>{position.description}</p>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default Volunteering;