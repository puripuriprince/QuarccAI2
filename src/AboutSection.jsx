import React from 'react';
import DivisionsSection from './DivisionsSection';

function AboutSection() {
    const cards = [
        { 
            title: 'Curiosity', 
            icon: <BrainIcon />,
            bgColor: 'bg-gradient-to-b from-yellow-100 to-yellow-300',
            offset: 'sm:pt-52 lg:pt-36'
        },
        { 
            title: 'Innovation', 
            icon: <LightbulbIcon />,
            bgColor: 'bg-gradient-to-b from-blue-100 to-blue-300',
            offset: ''
        },
        { 
            title: 'Mentorship', 
            icon: <MentorIcon />,
            bgColor: 'bg-gradient-to-b from-green-100 to-green-300',
            offset: 'pt-32 sm:pt-0'
        },
        { 
            title: 'Inclusion', 
            icon: <HeartIcon />,
            bgColor: 'bg-gradient-to-b from-purple-100 to-purple-300',
            offset: ''
        }
    ];

    const Card = ({ card }) => (
        <div 
            className={`relative flex aspect-[2/3] items-center justify-center overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group ${card.bgColor}`}
        >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-transform duration-300 group-hover:-translate-y-[80%]">
                <div className="rounded-full bg-white p-4 shadow-md">
                    {card.icon}
                </div>
            </div>
            <div className="absolute bottom-0 w-full p-4 text-center transform transition-all duration-300">
                <h3 className="text-lg font-semibold text-white drop-shadow-md opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:mb-2">
                    {card.title}
                </h3>
                <p className="text-white text-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {card.description}
                </p>
            </div>
        </div>
    );

    return (
        <>
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <div className="lg:flex lg:items-center lg:gap-x-14">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                            <span>About </span>
                            <span className="text-[oklch(44.889%_0.15545_-73.341)]">Concordia </span>
                            <span>AI Club</span>
                        </h1>
                        <p className="text-lg leading-8 text-gray-600 mb-16 lg:mb-0">
                            The Concordia AI Club is the premier AI club at Concordia University. We are dedicated to fostering an inclusive 
                            and vibrant community for students interested in artificial intelligence. Our vision is to serve as a centralized 
                            hub for the AI community on campus, connecting everyone from domain experts and practitioners to theorists.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="w-full lg:w-1/2">
                        <div className="mt-14 flex justify-center gap-4 px-2 sm:-ml-16 sm:gap-8 sm:pl-20 lg:-ml-0 lg:mt-0 lg:justify-end lg:pl-0">
                            {/* First Column */}
                            <div className="2xl w-40 flex-none space-y-6 sm:mr-0 sm:w-44 sm:space-y-8 sm:pt-52 lg:pt-36">
                                {[cards[0], cards[1]].map((card, index) => (
                                    <Card key={index} card={card} />
                                ))}
                            </div>
                            {/* Second Column */}
                            <div className="w-40 flex-none space-y-6 pt-32 sm:w-44 sm:space-y-8 sm:pt-0">
                                {[cards[2], cards[3]].map((card, index) => (
                                    <Card key={index} card={card} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divisions Section */}
            {/*<DivisionsSection />*/}
        </>
    );
}

function BrainIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
            <path d="M9 13a4.5 4.5 0 0 0 3-4"/>
            <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/>
            <path d="M3.477 10.896a4 4 0 0 1 .585-.396"/>
            <path d="M6 18a4 4 0 0 1-1.967-.516"/>
        </svg>
    );
}

function LightbulbIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
            <path d="M9 18h6"/>
            <path d="M10 22h4"/>
        </svg>
    );
}

function MentorIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
    );
}

function HeartIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        </svg>
    );
}

export default AboutSection; 