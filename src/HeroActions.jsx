import React from 'react';
import { Link } from 'react-router-dom';

function HeroActions() {
    return (
        <div className="flex mt-10 gap-x-2 items-center">
            <a 
                href="/signup" 
                className="no-underline"
            >
                <button className="h-9 px-4 py-2 text-sm leading-5 font-medium text-[oklch(96.833%_0.01405_-72.601)] normal-case inline-flex ease-in-out items-center cursor-pointer justify-center transition-all overflow-hidden duration-[0.3s] tracking-[normal] whitespace-nowrap [background-color:oklch(44.889%_0.15545_-73.341)] shadow-[oklch(0%_0_none_/_0)_0px_0px_0px_0px,oklch(0%0_none/0)_0px_0px_0px_0px,oklch(0%_0_none_/_0.1)_0px_1px_3px_0px,oklch(0%0_none/0.1)_0px_1px_2px_-1px]" 
                    style={{borderRadius: "6px"}}>
                    <span>Get involved</span>
                    <div className="flex h-full w-full inset-0 absolute justify-center skew-x-[-13deg] -translate-x-full"></div>
                </button>
            </a>

            <Link 
                to="/conuai" 
                className="h-9 px-4 py-2 text-sm leading-5 font-medium text-[oklch(14.479%_0_none)] normal-case inline-flex ease-in-out items-center cursor-pointer justify-center duration-[0.15s] tracking-[normal] whitespace-nowrap transition-colors [background-color:oklch(100%_0_none)] shadow-[oklch(0%_0_none_/_0)_0px_0px_0px_0px,oklch(0%0_none/0)_0px_0px_0px_0px,oklch(0%_0_none_/_0.05)_0px_1px_2px_0px] no-underline hover:no-underline"
                style={{borderRadius: "6px", border: "1px solid oklch(92.191% 0 none)"}}>
                <span>ConuAI</span>
                <span className="ml-2 text-[oklch(55.553%_0_none)]">→</span>
            </Link>
        </div>
    );
}

export default HeroActions;
