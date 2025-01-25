import React from 'react';
import HeroText from './HeroText.jsx';

function HeroContentInner(prop) {
    return (
        <div className="py-24 lg:flex sm:py-32 lg:py-40 lg:gap-x-10 lg:items-center">
            <HeroText />
            <div className="mt-16 lg:grow lg:mt-0 sm:mt-24 lg:shrink-0">
            </div>
        </div>
    );
}
export default HeroContentInner;
