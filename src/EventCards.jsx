import React from 'react';

function EventCards({ inHomePage = false }) {
    const events = [
        {
            title: "QUARCC wins $10,000 at McGill-FIAM Hackathon",
            description: "Our team built AI analysts for momentum, options, sentiment from SEC filings, fundamentals and whole sector returns, achieving the best risk-adjusted returns.",
            date: "2024-11-10T23:30:00.000Z",
            image: "/Events/equipe-gagnante-2-1024x626.jpg",
            link: "https://www.linkedin.com/posts/cielofinsoen_fiam-hackathon-fintech-activity-7255742962184212480-fFLP?utm_source=share&utm_medium=member_desktop"
        },
        {
            title: "Joint event with Economicsense",
            description: "Work on your projects and publish a paper with Economicsense...",
            date: "2024-11-03T20:00:00.000Z",
            image: "/Events/economicsensepic.jpg",
            link: "https://www.linkedin.com/posts/quarcc_a-look-at-last-wednesdays-networking-cocktail-activity-7249781047653986304-l9x4"
        },
        {
            title: "Quantitative Trading Office tour",
            description: "Joint us for a tour of the Quantitative Trading office at McGill University...",
            date: "2024-11-01T23:00:00.000Z",
            image: "/Events/mackenzietour.jpg",
            link: "https://www.linkedin.com/posts/benjamin-vigneault-motta_last-week-i-had-the-privilege-of-hosting-ugcPost-7269020823624069120-k1ys"
        },
        {
            title: "OpenAI <> SAIC",
            description: "Join us for an exciting collaboration with OpenAI...",
            date: "2024-10-17T01:30:00.000Z",
            image: "https://placehold.co/240x160/e2e8f0/475569?text=Event+Image",
            link: "/events/openai-saic"
        },
        {
            title: "AI Safety Workshop",
            description: "Learn about the importance of AI safety and alignment...",
            date: "2024-10-15T18:30:00.000Z",
            image: "https://placehold.co/240x160/e2e8f0/475569?text=Event+Image",
            link: "/events/ai-safety"
        },
        {
            title: "ML Study Group",
            description: "Join our weekly machine learning study group...",
            date: "2024-10-10T19:00:00.000Z",
            image: "https://placehold.co/240x160/e2e8f0/475569?text=Event+Image",
            link: "/events/ml-study-group"
        },
        {
            title: "Research Paper Discussion",
            description: "Weekly discussion of latest AI research papers...",
            date: "2024-10-08T20:00:00.000Z",
            image: "https://placehold.co/240x160/e2e8f0/475569?text=Event+Image",
            link: "/events/paper-discussion"
        },
        {
            title: "AI Ethics Panel",
            description: "Join our panel discussion on AI ethics and responsibility...",
            date: "2024-10-05T17:00:00.000Z",
            image: "https://placehold.co/240x160/e2e8f0/475569?text=Event+Image",
            link: "/events/ai-ethics"
        },
        {
            title: "Intro to PyTorch",
            description: "Beginner-friendly workshop on PyTorch fundamentals...",
            date: "2024-10-01T18:00:00.000Z",
            image: "https://placehold.co/240x160/e2e8f0/475569?text=Event+Image",
            link: "/events/pytorch-intro"
        }
    ];

    // Sort events by date in descending order (most recent first)
    const sortedEvents = [...events].sort((a, b) => 
        new Date(b.date) - new Date(a.date)
    );

    // Show only 3 events on home page, show all in activities
    const displayEvents = inHomePage ? sortedEvents.slice(0, 3) : sortedEvents;

    return (
        <div className={inHomePage ? "pb-16" : "pt-32 pb-16"}>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {displayEvents.map((event, index) => (
                    <div key={index} className="w-full h-full">
                        <a 
                            className="block h-full text-[oklch(14.479%_0_none)] [text-decoration:none_solid_oklch(14.479%_0_none)]" 
                            href={event.link}
                            target={event.isExternal ? "_blank" : "_self"}
                            rel={event.isExternal ? "noopener noreferrer" : ""}
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex flex-col h-full text-[oklch(14.479%_0_none)] [background-color:oklch(100%_0_none)] shadow-sm hover:shadow-md transition-shadow duration-200" 
                                     style={{borderRadius: "0.75rem", borderWidth: "1px"}}>
                                    <img 
                                        alt={event.title}
                                        width="240"
                                        height="160"
                                        decoding="async"
                                        className="block h-[160px] w-full max-w-full text-[oklch(0%_0_none_/_0)] align-middle object-cover flex-shrink-0"
                                        style={{borderTopLeftRadius: "0.75rem", borderTopRightRadius: "0.75rem"}}
                                        src={event.image}
                                    />
                                    <div className="p-3 flex flex-col flex-grow">
                                        <h3 className="m-0 text-[14px] leading-snug font-semibold -tracking-wide overflow-hidden [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] min-h-[2.5em]">
                                            {event.title}
                                        </h3>
                                        <p className="m-0 text-xs mt-[6px] leading-5 text-[oklch(55.553%_0_none)] overflow-hidden [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] min-h-[2.5em]">
                                            {event.description}
                                        </p>
                                    </div>
                                    <div className="p-3 pt-0 mt-auto flex flex-col items-start sm:flex-row justify-between sm:items-center">
                                        <div className="flex gap-x-2 text-xs leading-5 items-start text-[oklch(55.553%_0_none)] sm:items-center">
                                            <CalendarIcon />
                                            <time dateTime={event.date} className="text-xs leading-4 [text-wrap:nowrap]">
                                                {new Date(event.date).toLocaleDateString('en-US', {
                                                    month: 'long',
                                                    day: 'numeric',
                                                    year: 'numeric'
                                                })}
                                            </time>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

function CalendarIcon() {
    return (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 block align-middle">
            <path d="M4.5 1C4.77614 1 5 1.22386 5 1.5V2H10V1.5C10 1.22386 10.2239 1 10.5 1C10.7761 1 11 1.22386 11 1.5V2H12.5C13.3284 2 14 2.67157 14 3.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V3.5C1 2.67157 1.67157 2 2.5 2H4V1.5C4 1.22386 4.22386 1 4.5 1ZM10 3V3.5C10 3.77614 10.2239 4 10.5 4C10.7761 4 11 3.77614 11 3.5V3H12.5C12.7761 3 13 3.22386 13 3.5V5H2V3.5C2 3.22386 2.22386 3 2.5 3H4V3.5C4 3.77614 4.22386 4 4.5 4C4.77614 4 5 3.77614 5 3.5V3H10ZM2 6V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V6H2Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
        </svg>
    );
}

function ArrowIcon() {
    return (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 block ml-1.5 ease-in-out align-middle duration-[0.15s] transition-transform">
            <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
        </svg>
    );
}

function ExternalLinkIcon() {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="12" 
            height="12" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="ml-1"
        >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
    );
}

export default EventCards;
