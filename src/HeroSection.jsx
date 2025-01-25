import React from 'react';
import HeroContent from './HeroContent.jsx';
import ActivitiesSection from './ActivitiesSection.jsx';
import SponsorsSection from './SponsorsSection.jsx';
import RecentEventsSection from './RecentEventsSection.jsx';
import Navigation from './Navigation.jsx';

function HeroSection(prop) {
    return (
<div className="px-6 w-full mx-auto max-w-7xl"
><HeroContent
/><ActivitiesSection
/><SponsorsSection
/><RecentEventsSection
/></div
>
);
}
export default HeroSection;
