import React from 'react';

function TeamSection() {
    const presidents = [
        {
            name: "Matthieu Huss",
            role: "Co-Founder and President",
            image: "/Headshots/Matthieu.JPG",
            email: "president@quarcc.com",
            linkedin: "https://www.linkedin.com/in/matthieu-huss-915956230",
            bio: "A senior studying econometrics and programming, Matthieu enjoys winning algo trading and piano competitions as well as reading. In his free time he runs a startup and gets beaten by his roommate in chess."
        }
    ];

    const boardMembers = [
        {
            name: "Casey Jussaume",
            role: "Co-Founder and Director of Research",
            image: "/Headshots/Casey.JPG",
            email: "research@quarcc.com",
            linkedin: "https://www.linkedin.com/in/casey-jussaume/",
            bio: "Casey is a finance and accounting student passionate about data collection and manipulation. Formerly a competitive dancer and an excel financial modeller, he is currently an editor for multiple books related to sustainable finance and aims to publish papers to prestigious journal pertaining to finance and economics through QUARCC's research division."
        },
        {
            name: "Valentino Magniette-Bosseboeuf",
            role: "Co-Founder and Director of Competitions",
            image: "/Headshots/Valentino.JPG",
            email: "competitions@quarcc.com",
            linkedin: "https://www.linkedin.com/in/valentino-mb/",
            bio: "Valentino is a second year finance and accounting student who is passionate about financial derivatives and fixed income. He enjoys researching option Greeks and reading almost anything. He is currently working on sending the members of QUARCC all over Canada and the USA to competitions."
        },
        {
            name: "Lucas Miranda",
            role: "Director of Innovation",
            image: "/Headshots/Lucas.JPG",
            email: "innovation@quarcc.com",
            linkedin: "https://www.linkedin.com/in/cielofinsoen/",
            bio: "Lucas is a software engineering and finance student with interests in machine learning, quantitative finance, and AI. On campus, Lucas enjoys winning AI & math competitions and actively participates in any tech and finance-related projects. In his free time, Lucas enjoys brainstorming startup ideas, tackling math challenges, playing baseball & generally meeting likeminded people."
        },
        {
            name: "Augustine Davydchak",
            role: "Vice-President Finance",
            image: "/Headshots/Jasmin.JPG",
            email: "info@quarcc.com",
            linkedin: "https://www.linkedin.com/in/augustine-davy-652563155/",
            bio: "Augustine is a finance student passionate about investment analysis and portfolio management. He is actively involved in student leadership, organizes finance case competitions, and enjoys playing badminton, foosball, and pool."
        },
        {
            name: "Cloe Monteith",
            role: "Vice-President Internal Affairs",
            image: "/Headshots/Cloe.JPG",
            email: "internal@quarcc.com",
            linkedin: "https://www.linkedin.com/in/cloe-monteith-a435301a9/",
            bio: "Cloe is a third-year Concordia student studying Finance. Alongside her work with QUARCC, she enjoys wakeboarding, skiing, spending time outdoors, and puppies."
        },
        {
            name: "Maxime Hirret",
            role: "Vice-President Academics",
            image: "/Headshots/Maxime.JPG",
            email: "",
            linkedin: "https://www.linkedin.com/in/maximehirret/",
            bio: "Maxime is a finance student with experience in transaction services and M&A. He is developing skills in AI-driven portfolio management and enjoys exploring quantitative strategies. Outside of school and work, he's an avid soccer player and skier."
        },
        {
            name: "Benjamin Vigneault-Motta",
            role: "Vice-President External Affairs",
            image: "/Headshots/Ben.JPG",
            email: "external@quarcc.com",
            linkedin: "https://www.linkedin.com/in/benjamin-vigneault-motta/",
            bio: "Benjamin is a second year student in Finance chasing internships thanks to the Co-op program. In his free time, Benjamin likes to go to the gym, watch movies and play cards."
        },
        {
            name: "Melanie Pomerleau",
            role: "Vice-President Marketing",
            image: "/Headshots/Melanie.JPG",
            email: "marketing@quarcc.com",
            linkedin: "https://www.linkedin.com/in/melanie-pomerleau-199312224/",
            bio: "Melanie is a second-year marketing student with a finance minor. With experience in relationship-building and customer service, she hopes to one day work in a quantitative organization bridging technical insights with client needs."
        },
        {
            name: "Nicholas Thibodeau",
            role: "Vice-President Logistics",
            image: "/Headshots/Nicholas.JPG",
            email: "",
            linkedin: "https://www.linkedin.com/in/nicholas-thibodeau04/",
            bio: "Nicholas is a 3rd year at JMSB studying Finance, and real estate. He's also a part of the John Molson Competition committee. In his free time, he enjoys reading and hiking with friends."
        },
        {
            name: "Carter Cameron",
            role: "Vice-President Projects",
            image: "/Headshots/Carter.JPG",
            email: "projects@quarcc.com",
            linkedin: "https://www.linkedin.com/in/cartercameronfina/",
            bio: "Carter is a finance student who previously studied mechanical engineering. He enjoys creating trading systems and reading books about capital markets. Outside of school and work, he enjoys practicing Olympic Weightlifting."
        },
        {
            name: "Daksh Seth",
            role: "AVP Corporate",
            image: "/Headshots/Daksh.JPG",
            email: "",
            linkedin: "https://www.linkedin.com/in/daksh-seth-3137481a9/",
            bio: "Daksh is a third year in Mathematics and Computational Finance. Besides QUARCC, he enjoys playing soccer, spikeball and is always down for a sportive activity."
        }
    ];

    const renderSocialLinks = (email, linkedin) => (
        <div className="flex justify-center gap-4 mt-4">
            {email && (
                <a href={`mailto:${email}`} className="text-gray-600 hover:text-primary transition-colors">
                    <i className="fa fa-envelope text-xl" aria-hidden="true"></i>
                </a>
            )}
            {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                    <i className="fa fa-linkedin text-xl" aria-hidden="true"></i>
                </a>
            )}
        </div>
    );

    const MemberCard = ({ member }) => (
        <a 
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:scale-[1.02] transition-transform duration-200 no-underline text-inherit h-full"
        >
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg h-full">
                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
                    <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover object-top transform translate-y-2"
                        style={{
                            transform: "scale(1.4)",
                            transformOrigin: "center 30%"
                        }}
                    />
                </div>
                <div className="flex flex-col flex-grow">
                    <h4 className="text-xl font-semibold text-gray-800 no-underline text-center">
                        {member.name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 no-underline text-center">
                        {member.role}
                    </p>
                    <p className="text-gray-600 text-sm text-center mb-4 no-underline flex-grow">
                        {member.bio}
                    </p>
                    {renderSocialLinks(member.email, member.linkedin)}
                </div>
            </div>
        </a>
    );

    return (
        <div className="mx-auto max-w-7xl px-4 py-12">
            {/* Presidents Section */}
            <div className="container relative mb-12">
                <div className="shrink-0 bg-border h-[1px] w-full" role="none" />
                <h3 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-background px-2 text-sm font-semibold text-muted-foreground md:text-xl">
                    President
                </h3>
            </div>

            {/* Center the president card */}
            <div className="flex justify-center mb-16">
                {presidents.map((member, index) => (
                    <div key={index} className="w-full max-w-md">
                        <MemberCard member={member} />
                    </div>
                ))}
            </div>

            {/* Board Members Section */}
            <div className="container relative mt-16 mb-12">
                <div className="shrink-0 bg-border h-[1px] w-full" role="none" />
                <h3 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-background px-2 text-sm font-semibold text-muted-foreground md:text-xl">
                    Board Members
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {boardMembers.map((member, index) => (
                    <MemberCard key={index} member={member} />
                ))}
            </div>
        </div>
    );
}

export default TeamSection; 