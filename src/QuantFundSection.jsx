import React from 'react';

function QuantFundSection() {
    const fundManagers = [
        {
            name: "Matthieu Huss",
            role: "Fund Director",
            image: "images/matthieu pfp.jpg",
            bio: "A senior studying econometrics and programming, Matthieu enjoys winning algo trading and piano competitions as well as reading. In his free time he runs a startup and gets beaten by his roommate in chess.",
            linkedin: "https://www.linkedin.com/in/matthieu-huss-915956230"
        },
        {
            name: "Casey Jussaume",
            role: "Head of Research",
            image: "images/humiclogo.svg",
            bio: "Casey is a finance and accounting student passionate about data collection and manipulation. Formerly a competitive dancer and an excel financial modeller, he is currently an editor for multiple books related to sustainable finance.",
            linkedin: "https://www.linkedin.com/in/casey-jussaume/"
        },
        {
            name: "Lucas Miranda",
            role: "Head of Innovation",
            image: "images/quarcc_logo.jpg",
            bio: "Lucas is a software engineering and finance student with interests in machine learning, quantitative finance, and AI. On campus, Lucas enjoys winning AI & math competitions and actively participates in any tech and finance-related projects.",
            linkedin: "https://www.linkedin.com/in/cielofinsoen/"
        }
    ];

    const boardMembers = [
        {
            name: "Augustine Davydchak",
            role: "Risk Management",
            image: "images/augustine pfp.jpg",
            bio: "Augustine is a finance student passionate about investment analysis and portfolio management. He is actively involved in student leadership, organizes finance case competitions.",
            linkedin: "https://www.linkedin.com/in/augustine-davy-652563155/"
        },
        {
            name: "Maxime Hirret",
            role: "Portfolio Strategy",
            image: "images/quarcc_logo.jpg",
            bio: "Maxime is a finance student with experience in transaction services and M&A. He is developing skills in AI-driven portfolio management and enjoys exploring quantitative strategies.",
            linkedin: "https://www.linkedin.com/in/maximehirret/"
        },
        {
            name: "Carter Cameron",
            role: "Trading Systems",
            image: "images/quarcc_logo.jpg",
            bio: "Carter is a finance student who previously studied mechanical engineering. He enjoys creating trading systems and reading books about capital markets. Outside of school and work, he enjoys practicing Olympic Weightlifting.",
            linkedin: "https://www.linkedin.com/in/cartercameronfina/"
        }
    ];

    const currentAnalysts = [
        {
            name: "Nicholas Thibodeau",
            role: "Quantitative Analyst",
            image: "images/quarcc_logo.jpg",
            bio: "Nicholas is a 3rd year at JMSB studying Finance, and real estate. He's also a part of the John Molson Competition committee. In his free time, he enjoys reading and hiking with friends.",
            linkedin: "https://www.linkedin.com/in/nicholas-thibodeau04/"
        },
        {
            name: "Melanie Pomerleau",
            role: "Data Analyst",
            image: "images/melanie pfp.jpeg",
            bio: "Melanie is a second-year marketing student with a finance minor. With experience in relationship-building and customer service, she hopes to one day work in a quantitative organization bridging technical insights with client needs.",
            linkedin: "https://www.linkedin.com/in/melanie-pomerleau-199312224/"
        },
        {
            name: "Jasmin Lauriere",
            role: "Research Analyst",
            image: "images/jasmin pfp.jpeg",
            bio: "Jasmin is focused on analyzing market trends and developing trading strategies. With a strong background in data analysis, she contributes to the fund's research initiatives.",
            linkedin: "https://www.linkedin.com/in/jasmin-l-20a7b5220/"
        }
    ];

    const alumni = [
        {
            name: "Valentino Magniette-Bosseboeuf",
            role: "Former Head of Trading",
            currentPosition: "Derivatives Trader",
            image: "images/valentino pfp.jpg",
            year: "2023",
            linkedin: "https://www.linkedin.com/in/valentino-mb/"
        },
        {
            name: "Benjamin Vigneault-Motta",
            role: "Former Portfolio Manager",
            currentPosition: "Investment Banking Analyst",
            image: "images/ben pfp.jpg",
            year: "2023",
            linkedin: "https://www.linkedin.com/in/benjamin-vigneault-motta/"
        },
        {
            name: "Daksh Seth",
            role: "Former Quant Analyst",
            currentPosition: "Quantitative Researcher",
            image: "images/quarcc_logo.jpg",
            year: "2023",
            linkedin: "https://www.linkedin.com/in/daksh-seth-3137481a9/"
        }
    ];

    const MemberCard = ({ member }) => (
        <a 
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-transform duration-200 hover:scale-[1.02] no-underline"
        >
            <div className="bg-white rounded-xl shadow-lg p-6 h-full cursor-pointer">
                <div className="flex items-center space-x-4">
                    <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                        <h4 className="font-semibold text-lg text-gray-800 no-underline">{member.name}</h4>
                        <p className="text-gray-600 text-sm no-underline">{member.role}</p>
                    </div>
                </div>
                <p className="mt-4 text-gray-600 text-sm no-underline">{member.bio}</p>
            </div>
        </a>
    );

    const AlumniCard = ({ alum }) => (
        <a 
            href={alum.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-transform duration-200 hover:scale-[1.02] no-underline"
        >
            <div className="bg-white rounded-xl shadow-lg p-6 h-full cursor-pointer">
                <div className="flex items-center space-x-4">
                    <img 
                        src={alum.image} 
                        alt={alum.name}
                        className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                        <h4 className="font-semibold text-lg text-gray-800 no-underline">{alum.name}</h4>
                        <p className="text-gray-600 text-sm no-underline">{alum.currentPosition}</p>
                        <p className="text-gray-500 text-xs no-underline">Class of {alum.year}</p>
                    </div>
                </div>
            </div>
        </a>
    );

    return (
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            {/* Hero Section */}
            <div className="mb-20">
                <h2 className="text-4xl font-bold text-center mb-6">QUARCC Quantitative Investment Fund</h2>
                <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
                    A student-run fund leveraging AI and machine learning to develop sophisticated trading strategies
                </p>
            </div>

            {/* About Section */}
            <div className="mb-20">
                <h3 className="text-2xl font-semibold mb-6">About Our Fund</h3>
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-xl font-semibold mb-4">Our Mission</h4>
                            <p className="text-gray-600">
                                To provide hands-on experience in quantitative trading while managing real capital using cutting-edge technology.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold mb-4">Key Focus Areas</h4>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Algorithmic Trading Strategies</li>
                                <li>Machine Learning Applications</li>
                                <li>Risk Management</li>
                                <li>Portfolio Optimization</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Board Members Section */}
            <div className="mb-20">
                <h3 className="text-2xl font-semibold mb-6">Advisory Board</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {boardMembers.map((member, index) => (
                        <MemberCard key={index} member={member} />
                    ))}
                </div>
            </div>

            {/* Fund Managers Section */}
            <div className="mb-20">
                <h3 className="text-2xl font-semibold mb-6">Fund Managers</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {fundManagers.map((manager, index) => (
                        <MemberCard key={index} member={manager} />
                    ))}
                </div>
            </div>

            {/* Current Analysts Section */}
            <div className="mb-20">
                <h3 className="text-2xl font-semibold mb-6">Current Analysts</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentAnalysts.map((analyst, index) => (
                        <MemberCard key={index} member={analyst} />
                    ))}
                </div>
            </div>

            {/* Alumni Section */}
            <div>
                <h3 className="text-2xl font-semibold mb-6">Alumni Success Stories</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {alumni.map((alum, index) => (
                        <AlumniCard key={index} alum={alum} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default QuantFundSection; 