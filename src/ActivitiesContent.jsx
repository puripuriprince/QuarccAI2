import React, { useState } from 'react';
import ActivityCard from './ActivityCard.jsx';

function ActivitiesContent(prop) {
    const [data] = useState({
        "element_2": {
            "element_4": { "src": "🚀", "attrs": {} }, // Rocket for incubator
            "element_6": {"text": "Project Incubator"},
            "element_8": {"text": "Startup incubator for students to build their own projects and get real-world experience."}
        },
        "element_3": {
            "element_4": { "src": "👨‍🏫", "attrs": {} }, // Teacher for workshops
            "element_6": {"text": "Workshops"},
            "element_8": {"text": "Classes to teach students all the technical interview skills they need to succeed in the world of AI."}
        },
        "element_4": {
            "element_4": { "src": "🔬", "attrs": {} }, // Microscope for research
            "element_6": {"text": "Student Research Project"},
            "element_8": {"text": "Resources for students to explore personal research ideas and gain valuable research experience early on."}
        },
        "element_5": {
            "element_4": { "src": "🎤", "attrs": {} }, // Microphone for tech talks
            "element_6": {"text": "Tech Talks"},
            "element_8": {"text": "Small-group discussions and lectures by notable guests from industry and academia."}
        },
        "element_6": {
            "element_4": { "src": "💻", "attrs": {} }, // Laptop for hackathons
            "element_6": {"text": "Hackathons"},
            "element_8": {"text": "Weekly session for club members to gather, build, and experiment with API credits sponsored by the club."}
        },
        "element_7": {
            "element_4": { "src": "💼", "attrs": {} }, // Briefcase for career development
            "element_6": {"text": "Career Development"},
            "element_8": {"text": "Student-led weekly reading groups discussing an impactful research paper."}
        }
    });

    return (
        <div>
            <div className="grid gap-4 mx-auto max-w-7xl grid-cols-[repeat(1,minmax(0px,1fr))] md:grid-cols-[repeat(3,minmax(0px,1fr))] md:grid-rows-[repeat(2,minmax(0px,1fr))]">
                <ActivityCard {...data['element_2']} />
                <ActivityCard {...data['element_3']} />
                <ActivityCard {...data['element_4']} />
                <ActivityCard {...data['element_5']} />
                <ActivityCard {...data['element_6']} />
                <ActivityCard {...data['element_7']} />
            </div>
        </div>
    );
}

export default ActivitiesContent;
