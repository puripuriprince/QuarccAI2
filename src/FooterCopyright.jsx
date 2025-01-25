import React from 'react';
import FooterLinks from './FooterLinks.jsx';

function FooterCopyright(prop) {
    return (
<div className="flex w-full flex-col gap-y-10 items-center md:justify-between md:flex-row-reverse"
><FooterLinks
/><p className="m-0 text-xs leading-5 text-center text-[oklch(100%_0_none)]"
  > <p>Copyright© 2025 QUARCC. All rights reserved.</p> </p
  ></div
>
);
}
export default FooterCopyright;
