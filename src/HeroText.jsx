import React from 'react';
import HeroActions from './HeroActions.jsx';

function HeroText(prop) {
    return (
<div className="mx-auto lg:mx-0 max-w-3xl lg:flex-auto"
><h1 className="m-0 mt-10 text-4xl max-w-xl font-bold leading-10 sm:text-6xl -tracking-wide sm:leading-none"
  ><span className="text-[oklch(44.889%_0.15545_-73.341)]"
    >QUARCC</span
    ><br
    /><span className="lg:[text-wrap:wrap] sm:[text-wrap:nowrap] xl:[text-wrap:nowrap]"
    >Quant AI, research</span
    ><br
    />& competitions Club</h1
  ><p className="m-0 mt-6 text-lg leading-8 text-[oklch(44.611%_0.02631_166.8)]"
  >The Premiere Quant Club in Canada. Engage and innovate with the brightest minds in the field of AI & Finance. Join us for workshops, talks, and collaborative projects!</p
  ><HeroActions
/></div
>
);
}
export default HeroText;
