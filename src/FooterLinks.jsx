import React from 'react';

function FooterLinks() {
    return (
        <div className="flex items-center">
            <a className="text-[oklch(14.479%_0_none)] [text-decoration:none_solid_oklch(14.479%_0_none)]">
                <button className="h-9 m-0 p-0 px-4 py-2 text-sm leading-5 font-medium normal-case inline-flex ease-in-out text-[oklch(100%_0_none)] items-center cursor-pointer justify-center duration-[0.15s] tracking-[normal] whitespace-nowrap transition-colors underline-offset-4 [appearance:button] [background-image:none] [background-color:oklch(0%_0_none_/_0)]" 
                        style={{borderRadius: "6px"}}>
                    Privacy policy
                </button>
            </a>
            <div className="h-4 w-px shrink-0 [background-color:oklch(96.833%_0.01405_-72.601)]">
            </div>
            <a 
                href="mailto:info@quarcc.com"
                className="text-[oklch(100%_0_none)] [text-decoration:none_solid_oklch(100%_0_none)]"
            >
                <button className="h-9 m-0 p-0 px-4 py-2 text-sm leading-5 font-medium normal-case inline-flex ease-in-out text-[oklch(100%_0_none)] items-center cursor-pointer justify-center duration-[0.15s] tracking-[normal] whitespace-nowrap transition-colors underline-offset-4 [appearance:button] [background-image:none] [background-color:oklch(0%_0_none_/_0)]" 
                        style={{borderRadius: "6px"}}>
                    Contact Us
                </button>
            </a>
        </div>
    );
}

export default FooterLinks;
