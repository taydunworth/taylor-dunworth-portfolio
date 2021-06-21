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
      id: "e1"
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
        id: "e2"
      },
      {
        titles: [
            {
                eventName:  "Modern Features for Javascript: Foundations of ECMAScript (ES6+)",
                id: "e3-01",
            },
        ],
        host: "Women Who Code Tampa",
        id: "e3"
      },
      {
        titles: [
            {
                eventName: "Responsive Layouts with Bootstrap, Flexbox, and CSS Grid",
                id: "e4-01",
            },
        ],
        host: "JoomlaDay Florida",
        id: "e4"
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
        id: "e5"
      },
      {
        titles: [
            {
                eventName: "Breaking Up with Design",
                id: "e6-01",
            },
        ],
        host: "CMS Summit",
        id: "e6"
      },
    ]

const SpeakingEvents = () => {
  return (
    <div id="speaking">
        <h3>Speaking</h3>
        <ul>
            {events.map(event => (
            <li key={event.id}>
                {event.titles.map(title => (
                <h4 key={title.id}>{title.eventName}</h4>
                ))}
                <h5>{event.host}</h5>
                <p>{event.description}</p>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default SpeakingEvents;