import React, { useEffect, useState } from 'react';
import Navigation from './Navigation.jsx';
import HeaderActions from './HeaderActions.jsx';

function MyHeader(prop) {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setIsVisible(currentScrollY < lastScrollY || currentScrollY === 0);
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={`z-50 px-4 fixed top-4 w-[95%] mx-auto md:top-8 inset-x-0 ease-in-out transition-all max-w-screen-xl duration-[0.5s] [background-color:oklch(96.833%_0.01405_-72.601)] [animation-duration:0.5s] [transform:matrix(1,0,0,1,0,0)] ${isVisible ? 'visible' : 'hidden'}`} style={{ borderRadius: "9999px", border: "1px solid oklch(44.889% 0.15545 -73.341 / 0.15)" }}>
            <div className="flex h-16 relative items-center justify-between">
                <a className="top-2/4 absolute left-2/4 sm:static text-[oklch(14.479%_0_none)] [transform:matrix(1,0,0,1,0,0)] [text-decoration:none_solid_oklch(14.479%_0_none)]">
                    <button className="h-9 w-9 m-0 p-0 text-sm leading-5 font-medium text-[oklch(14.479%_0_none)] normal-case inline-flex ease-in-out items-center cursor-pointer justify-center duration-[0.15s] tracking-[normal] whitespace-nowrap transition-colors [appearance:button] [background-color:oklch(0%_0_none_/_0)] [background-image:none] [font-feature-settings:normal] [font-variation-settings:normal] [font-family:__GeistSans_3a0388,__GeistSans_Fallback_3a0388,ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji']" style={{ borderRadius: "9999px" }}>
                        {/* <img {...{"width":"24","height":"21"}} className="w-8 h-8 block align-middle" src="" /> */}
                        <span className="p-0 w-px h-px -m-px absolute overflow-hidden whitespace-nowrap [clip:rect(0px,0px,0px,0px)]" style={{ borderWidth: "0px" }}></span>
                    </button>
                </a>
                <Navigation />
                <HeaderActions />
            </div>
        </header>
    );
}

export default MyHeader;







