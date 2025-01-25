import React from 'react';

function SponsorsContent() {
    const sponsors = [
        {
            image: "",
            alt: "Sponsor 1",
            href: "#"
        },
        {
            image: "/SponsorLogos/realthetadatalogo.jpg",
            alt: "ThetaData",
            href: "https://thetadata.net",
            style: {
                transform: "scale(4)",
                transformOrigin: "center"
            }
        },
        {
            image: "/SponsorLogos/realpolygonlogo.svg",
            alt: "Polygon",
            href: "https://polygon.io",
            imgStyle: {
                position: 'relative',
                right: '2rem'  // Adjust this value to move left/right
            }
        },
        {
            image: "",
            alt: "Sponsor 4",
            href: "#"
        }
    ];

    return (
        <div>
            <div className="grid gap-0.5 sm:mx-0 overflow-hidden grid-cols-[repeat(2,minmax(0px,1fr))] md:grid-cols-[repeat(4,minmax(0px,1fr))]" style={{ borderRadius: "1rem" }}>
                {sponsors.map((sponsor, index) => (
                    <a 
                        key={index}
                        href={sponsor.href}
                        className="p-6 sm:p-10 relative text-[oklch(14.479%_0_none)] [background-color:oklch(100%_0_none)] [text-decoration:none_solid_oklch(14.479%_0_none)]"
                    >
                        <img 
                            className="h-auto max-h-12 block w-auto mx-auto"
                            src={sponsor.image}
                            alt={sponsor.alt}
                            style={{
                                ...sponsor.style,
                                ...sponsor.imgStyle
                            }}
                        />
                        <span className="sr-only">{sponsor.alt}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default SponsorsContent;
