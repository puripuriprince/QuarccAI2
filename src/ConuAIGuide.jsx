import React from 'react';

function ConuAIGuide() {
    const guides = [
        {
            title: "Getting Started with ConuAI",
            icon: "🤖",
            content: [
                "Ask questions in a clear, specific manner",
                "Include relevant context when needed",
                "You can ask about courses, clubs, events, or campus life",
                "ConuAI learns and improves with each interaction"
            ]
        },
        {
            title: "Student Life at Concordia",
            icon: "🎓",
            content: [
                "Which clubs should you join based on your interests?",
                "How to deal with bureaucracy?",
                "How to plan your schedule for the best possible results? (class/profs difficulty + course load)",
                "Best places to study on campus?",
                "The best study tips for exams, (past mocks and all current course theory)"
            ]
        },
        {
            title: "Montreal Student Life",
            icon: "🌆",
            content: [
                "Get an OPUS card for public transit",
                "Explore neighborhoods: Plateau, Mile End, Downtown",
                "Student discounts maximization"
            ]
        },
        {
            title: "Career Development",
            icon: "💼",
            content: [
                "Maximize your financial aid, in and out of school",
                "Attend career fairs, and rizz up recruiters",
                "Join co-op programs for work experience",
                "Network through LinkedIn and industry events",
                "Get the best interships possible"
            ]
        },
        {
            title: "Extracurricular Growth",
            icon: "🌱",
            content: [
                "Participate in hackathons (ConUHacks, McHacks)",
                "Join case competitions through JMSB",
                "Volunteer for student governance",
                "Contribute to research projects",
                "Join sports and recreation programs"
            ]
        }
    ];

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Making the Most of ConuAI</h2>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {guides.map((guide, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                            <span className="text-2xl mr-3">{guide.icon}</span>
                            <h3 className="text-xl font-semibold">{guide.title}</h3>
                        </div>
                        <ul className="space-y-2">
                            {guide.content.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start">
                                    <span className="text-purple-500 mr-2">•</span>
                                    <span className="text-gray-600">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="mt-12 bg-purple-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-4">Pro Tips:</h3>
                <ul className="space-y-3">
                    <li className="flex items-start">
                        <span className="text-purple-500 font-bold mr-2">1.</span>
                        <span>Join multiple clubs in your first semester to find your community</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-purple-500 font-bold mr-2">2.</span>
                        <span>Start networking early - many internships are found through connections</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-purple-500 font-bold mr-2">3.</span>
                        <span>Balance academics with extracurriculars for a well-rounded experience</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-purple-500 font-bold mr-2">4.</span>
                        <span>Keep an eye on the CSU and department newsletters for opportunities</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ConuAIGuide; 