import React from 'react';

function DivisionsSection() {
    const divisions = [
        {
            title: "Research",
            description: "Our research division focuses on cutting-edge AI projects, collaborating with faculty and industry partners. Members engage in paper readings, research projects, and knowledge sharing sessions.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
            )
        },
        {
            title: "Competitions",
            description: "Our competition teams participate in prestigious AI and ML competitions, hackathons, and challenges. We provide mentorship, resources, and a collaborative environment for success.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                    <path d="M4 22h16"/>
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
                </svg>
            )
        },
        {
            title: "Innovation",
            description: "Our innovation hub transforms ideas into reality. Members work on practical applications of AI, develop solutions for real-world problems, and collaborate on innovative projects.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v8"/>
                    <path d="M12 18v4"/>
                    <path d="M4.93 10.93 10 16"/>
                    <path d="M14 18.93 19.07 14"/>
                    <path d="M2 12h8"/>
                    <path d="M18 12h4"/>
                    <path d="M14 5.07 19.07 10"/>
                    <path d="M10 16 4.93 21.07"/>
                </svg>
            )
        }
    ];

    return (
        <section className="py-16 bg-[oklch(97.69%_0.00107_-72.824)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[oklch(44.889%_0.15545_-73.341)]">Our Divisions</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        QUARCC operates through three specialized divisions, each focused on different aspects of AI advancement
                    </p>
                </div>
                
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {divisions.map((division, index) => (
                        <div 
                            key={index}
                            className="relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-full bg-[oklch(44.889%_0.15545_-73.341)] text-white">
                                {division.icon}
                            </div>
                            <div className="mt-8">
                                <h3 className="text-xl font-semibold text-[oklch(44.889%_0.15545_-73.341)] text-center mb-4">
                                    {division.title}
                                </h3>
                                <p className="text-gray-600 text-center">
                                    {division.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default DivisionsSection; 