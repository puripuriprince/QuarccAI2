import React from 'react';

function CallToActionCard1() {
    return (
        <div className="flex px-6 py-16 h-full isolate relative max-w-md flex-col md:px-12 lg:px-16 text-center md:max-w-xl items-center lg:max-w-2xl overflow-hidden [background-color:oklch(100%_0_none)]" 
             style={{borderRadius: "1.5rem"}}>
            <img width="180" height="128" 
                 className="w-36 h-36 mt-2 block ease-in-out align-middle duration-[0.5s] transition-transform [animation-duration:0.5s]" 
                 src="\Icons\handshake.png" 
            />
            <h2 className="m-0 mx-auto text-3xl font-bold max-w-3xl leading-9 text-[oklch(44.889%_0.15545_-73.341)] md:text-2xl md:max-w-sm lg:text-4xl md:leading-8 lg:max-w-3xl lg:leading-10 -tracking-wide">
                Interested in Collaborating or Sponsoring?
            </h2>
            <div className="flex mt-10 gap-x-6 items-center justify-center">
                <a 
                    href="mailto:vp.external@quarcc.com" 
                    className="text-[oklch(14.479%_0_none)] no-underline"
                >
                    <button className="m-0 p-0 h-10 px-8 text-sm leading-5 font-medium text-[oklch(44.889%_0.15545_-73.341)] normal-case inline-flex ease-in-out items-center cursor-pointer justify-center duration-300 tracking-[normal] whitespace-nowrap transition-all hover:scale-105 hover:shadow-lg [background-color:oklch(100%_0_none)] shadow-[oklch(0%_0_none_/_0)_0px_0px_0px_0px,oklch(0%0_none/0)_0px_0px_0px_0px,oklch(0%_0_none_/_0.05)_0px_1px_2px_0px]" 
                            style={{borderRadius: "9999px", border: "1px solid oklch(44.889% 0.15545 -73.341)"}}>
                        Click here to get in touch
                    </button>
                </a>
            </div>
        </div>
    );
}

export default CallToActionCard1;
