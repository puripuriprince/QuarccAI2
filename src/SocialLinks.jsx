import React from 'react';

function SocialLinks() {
    const socialLinks = [
        {
            icon: "/Icons/instagram-svgrepo-com.svg",
            href: "https://www.instagram.com/quarcc.csu",
            label: "Instagram"
        },
        {
            icon: "/Icons/linkedin-svgrepo-com.svg",
            href: "https://www.linkedin.com/company/quarcc/",
            label: "LinkedIn"
        },
        {
            icon: "/Icons/youtube-svgrepo-com.svg",
            href: "https://www.youtube.com/@quarcc",
            label: "YouTube"
        },
        {
            icon: "/Icons/github-142-svgrepo-com.svg",
            href: "https://github.com/quarcc",
            label: "GitHub"
        }
    ];

    return (
        <div className="flex gap-x-4 justify-center">
            {socialLinks.map((link, index) => (
                <a 
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[oklch(100%_0_none)] [text-decoration:none_solid_oklch(100%_0_none)]"
                >
                    <div className="m-0 p-0 w-12 h-12 md:w-9 md:h-9 text-sm leading-5 font-medium normal-case inline-flex ease-in-out text-[oklch(44.889%_0.15545_-73.341)] items-center fill-[oklch(100%_0_none)] cursor-pointer justify-center duration-[0.15s] tracking-[normal] whitespace-nowrap transition-colors [background-color:oklch(96.833%_0.01405_-72.601_/_0.15)] rounded-full shadow-[oklch(0%_0_none_/_0)_0px_0px_0px_0px,oklch(0%0_none/0)_0px_0px_0px_0px,oklch(0%_0_none_/_0.05)_0px_1px_2px_0px]">
                        <span className="sr-only">{link.label}</span>
                        <img 
                            className="w-5 h-5 block align-middle" 
                            src={link.icon}
                            alt={link.label}
                        />
                    </div>
                </a>
            ))}
        </div>
    );
}

export default SocialLinks;
