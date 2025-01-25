import React from 'react';
import SocialLinks from './SocialLinks.jsx';

function FooterSocialLinks(prop) {
    return (
<div className="hidden w-full gap-y-4 md:flex flex-col items-center"
><div className="flex w-full gap-y-4 flex-col items-center justify-center"
  ><p className="m-0 text-[oklch(100%_0_none)]"
    >Our Socials</p
    ><SocialLinks
  /></div
  ></div
>
);
}
export default FooterSocialLinks;
