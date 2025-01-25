import React from 'react';
import MobileSocialLinks from './MobileSocialLinks.jsx';

function MobileNavigationContent(prop) {
    return (
<div className="flex gap-y-2 flex-col ease-in-out items-center transition-all duration-[0.3s] [animation-duration:0.3s] [transform:matrix(1,0,0,1,-16,0)] [animation-timing-function:cubic-bezier(0.4,0,0.2,1)]"
><MobileSocialLinks
/><button className="m-0 p-0 w-10 h-10 text-sm leading-5 font-medium normal-case inline-flex ease-in-out text-[oklch(14.479%_0_none)] items-center cursor-pointer justify-center duration-[0.15s] tracking-[normal] whitespace-nowrap transition-colors [appearance:button] [background-image:none] [background-color:oklch(100%_0_none)] [font-feature-settings:normal] [font-variation-settings:normal] shadow-[oklch(0%_0_none_/_0)_0px_0px_0px_0px,oklch(0%0_none/0)_0px_0px_0px_0px,oklch(0%_0_none_/_0.05)_0px_1px_2px_0px] [font-family:\_\_GeistSans\_3a0388,\_\_GeistSans\_Fallback\_3a0388,ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji']" style={{...{"borderRadius":"9999px","border":"1px solid oklch(92.191% 0 none)"}}}
  ><img {...{"width":"24","height":"24","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}} className="w-5 h-5 block align-middle text-[oklch(44.889%_0.15545_-73.341)]" src=""
    /><span className="p-0 w-px h-px -m-px absolute overflow-hidden whitespace-nowrap [clip:rect(0px,0px,0px,0px)]" style={{...{"borderWidth":"0px"}}}
    >Lore mi psu</span
    ></button
  ></div
>
);
}
export default MobileNavigationContent;
