import React from 'react';
import SponsorsContent from './SponsorsContent.jsx';

function SponsorsSection(prop) {
    return (
<section className="xl:py-16"
><header className="mb-8 text-center"
  ><div className="blur-0 opacity-100 [transform:translateY(-6px)_translateZ(0px)]"
    ><h2 className="m-0 text-4xl font-bold leading-loose"
      >Our sponsors</h2
      ></div
    ></header
  ><SponsorsContent
/></section
>
);
}
export default SponsorsSection;
