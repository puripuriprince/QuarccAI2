import React from 'react';
import EventSliderControls from './EventSliderControls.jsx';

function RecentEventsHeader(prop) {
    return (
<div className="flex w-full justify-between"
><header className="text-left"
  ><div className="blur-0 opacity-100 [transform:translateY(-6px)_translateZ(0px)]"
    ><h2 className="m-0 text-4xl font-bold leading-loose"
      >Recent Events</h2
      ></div
    ></header
  ><EventSliderControls
/></div
>
);
}
export default RecentEventsHeader;
