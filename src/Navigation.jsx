import React from 'react';
import { Link, useLocation } from "react-router-dom";

function Navigation() {
    const location = useLocation();
    
    return (
        <div className="hidden top-2/4 absolute left-2/4 sm:inline-flex [transform:matrix(1,0,0,1,-181.125,-18)]">
            <nav dir="ltr" className="z-10 flex flex-1 relative max-w-max items-center justify-center">
                <div className="relative">
                    <ul dir="ltr" className="h-9 m-0 p-1 flex-1 list-none inline-flex text-[oklch(55.553%_0_none)] items-center justify-center [list-style:none] [background-color:oklch(100%_0_none)]" style={{ borderRadius: "9999px" }}>
                        <li>
                            <Link 
                                to="/"
                                className={`nav-link no-underline px-3 py-1 text-sm leading-5 inline-flex font-medium ease-in-out items-center justify-center transition-all duration-[0.15s] whitespace-nowrap ${location.pathname === '/' ? 'active' : ''}`}
                                style={{ borderRadius: "9999px" }}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="mr-0 ml-[4px]">
                            <Link 
                                to="/about"
                                className={`nav-link no-underline px-3 py-1 text-sm leading-5 inline-flex font-medium ease-in-out items-center justify-center transition-all duration-[0.15s] whitespace-nowrap ${location.pathname === '/about' ? 'active' : ''}`}
                                style={{ borderRadius: "9999px" }}
                            >
                                About
                            </Link>
                        </li>
                        <li className="mr-0 ml-[4px]">
                            <Link 
                                to="/team"
                                className={`nav-link no-underline px-3 py-1 text-sm leading-5 inline-flex font-medium ease-in-out items-center justify-center transition-all duration-[0.15s] whitespace-nowrap ${location.pathname === '/team' ? 'active' : ''}`}
                                style={{ borderRadius: "9999px" }}
                            >
                                Team
                            </Link>
                        </li>
                        <li className="mr-0 ml-[4px]">
                            <Link 
                                to="/activities"
                                className={`nav-link no-underline px-3 py-1 text-sm leading-5 inline-flex font-medium ease-in-out items-center justify-center transition-all duration-[0.15s] whitespace-nowrap ${location.pathname === '/activities' ? 'active' : ''}`}
                                style={{ borderRadius: "9999px" }}
                            >
                                Activities
                            </Link>
                        </li>
                        <li className="mr-0 ml-[4px]">
                            <Link 
                                to="/conuai"
                                className={`nav-link no-underline px-3 py-1 text-sm leading-5 inline-flex font-medium ease-in-out items-center justify-center transition-all duration-[0.15s] whitespace-nowrap ${location.pathname === '/conuai' ? 'active' : ''}`}
                                style={{ borderRadius: "9999px" }}
                            >
                                ConuAI
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex left-0 absolute top-full justify-center"></div>
            </nav>
        </div>
    );
}

export default Navigation;