import React from 'react';



//this should be removed imo


function FooterPoweredBy(prop) {
    return (
<div className="flex gap-y-2 flex-col items-center justify-start"
><p className="m-0 text-sm leading-5"
  ></p
  ><a className="text-[oklch(100%_0_none)] [text-decoration:none_solid_oklch(100%_0_none)]"
  ><button className="m-0 p-0 text-[100%] font-normal normal-case text-[oklch(100%_0_none)] cursor-pointer tracking-[normal] [appearance:button] [background-image:none] [background-color:oklch(0%_0_none_/_0)] [font-feature-settings:normal] [font-variation-settings:normal] [font-family:\_\_GeistSans\_3a0388,\_\_GeistSans\_Fallback\_3a0388,ui-sans-serif,system-ui,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji']"
    /*><img {...{"width":"24","height":"7"}} className="w-32 block h-auto md:w-36 align-middle" src=""
      /><span className="p-0 w-px h-px -m-px absolute overflow-hidden whitespace-nowrap [clip:rect(0px,0px,0px,0px)]" style={{...{"borderWidth":"0px"}}}
      >   </span*/
      ></button
    ></a
  ></div
>
);
}
export default FooterPoweredBy;
