import React from 'react';
import ActivitiesContent from './ActivitiesContent.jsx';

function ActivitiesSection(prop) {
    return (
<section className="py-16 xl:py-32"
><header className="mb-8 text-center"
  ><div className="blur-0 opacity-100 [transform:translateY(-6px)_translateZ(0px)]"
    ><h2 className="m-0 text-4xl font-bold leading-loose"
      >Our Activities</h2
      ></div
    ></header
  ><ActivitiesContent
/></section
>
);
}
export default ActivitiesSection;
