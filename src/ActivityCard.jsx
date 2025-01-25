import React from 'react';

function ActivityCard({ element_4, element_6, element_8 }) {
    return (
        <div className="activity-card h-full md:col-span-1">
            <div className="w-full h-full text-[oklch(14.479%_0_none)] opacity-100 [transform:none] [background-color:oklch(100%_0_none)] shadow-[oklch(0%_0_none_/_0)_0px_0px_0px_0px,oklch(0%0_none/0)_0px_0px_0px_0px,oklch(0%0_none/0)_0px_0px_0px_0px]" 
                 style={{borderRadius: "0.75rem", borderWidth: "1px"}}>
                <div className="p-6 flex flex-col">
                    <div className="mb-4 text-3xl flex items-center justify-start">
                        {element_4.src}
                    </div>
                    <h3 className="m-0 mt-[6px] text-[16px] leading-none font-semibold -tracking-wide">
                        {element_6.text}
                    </h3>
                    <p className="m-0 text-sm mt-[6px] leading-5 text-[oklch(55.553%_0_none)]">
                        {element_8.text}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ActivityCard;
