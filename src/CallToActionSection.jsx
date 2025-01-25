import React from 'react';
import CallToActionCard1 from './CallToActionCard1.jsx';
import CallToActionCard2 from './CallToActionCard2.jsx';

function CallToActionSection() {
    return (
        <div className="w-screen relative left-[50%] right-[50%] -mx-[50vw] [background-color:oklch(96.833%_0.01405_-72.601)]">
            <div className="grid px-6 gap-8 mx-auto lg:px-8 max-w-7xl md:grid-cols-2 items-stretch py-24 sm:py-32">
                <div className="flex justify-center">
                    <CallToActionCard1 />
                </div>
                <div className="flex justify-center">
                    <CallToActionCard2 />
                </div>
            </div>
        </div>
    );
}

export default CallToActionSection;
