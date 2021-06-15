import React from "react";

const events = [
    {
      titles: [
          { 
              eventName: "Understanding and Implementing Web Accessibility",
              id: "e1-01",
          },
      ],
      host: "Presence",
      id: "e1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
    },
    {
        titles: [
            { 
                eventName: "Intro to XAML and Xamarin.Forms",
                id: "e2-01",
            },
            { 
                eventName: "Intro to Public Speaking",
                id: "e2-02",
            },
            { 
                eventName: "Intro to CSS",
                id: "e2-03",
            },
        ],
        host: "Suncoast Developers Guild",
        id: "e2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
      },
      {
        titles: [
            {
                eventName:  "Modern Features for Javascript: Foundations of ECMAScript (ES6+)",
                id: "e3-01",
            },
        ],
        host: "Women Who Code Tampa",
        id: "e3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
      },
      {
        titles: [
            {
                eventName: "Responsive Layouts with Bootstrap, Flexbox, and CSS Grid",
                id: "e4-01",
            },
        ],
        host: "JoomlaDay Florida",
        id: "e4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
      },
      {
        titles: [
            {
                eventName: "Should Designers Code?",
                id: "e5-01",
            },
            {
                eventName: "'Just Do This,' 'It’s Easy,' and Other Ways You’re Discouraging Your Developers",
                id: "e5-02",
            },
        ],
        host: "Suncoast.js",
        id: "e5",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
      },
      {
        titles: [
            {
                eventName: "Breaking Up with Design",
                id: "e6-01",
            },
        ],
        host: "CMS Summit",
        id: "e6",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis egestas integer quis ut semper ullamcorpe.",
      },
    ]

const SpeakingEvents = () => {
  return (
    <ul>
        {events.map(event => (
        <li key={event.id}>
            {event.titles.map(title => (
            <h3 key={title.id}>{title.eventName}</h3>
            ))}
            <h4>{event.host}</h4>
            <p>{event.description}</p>
        </li>
        ))}
    </ul>
  )
}

export default SpeakingEvents;