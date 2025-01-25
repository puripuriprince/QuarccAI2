import React from 'react';
import FooterContent from './FooterContent.jsx';
import FooterCopyright from './FooterCopyright.jsx';

function MyFooter(prop) {
    return (
<footer className="[background-color:oklch(44.889%_0.15545_-73.341)]"
><div className="px-6 py-16 w-full mx-auto 2xl:px-0 overflow-hidden max-w-screen-2xl"
  ><div className="flex w-full gap-y-8 flex-col items-center"
    ><FooterContent
    /><div className="h-px w-full shrink-0 [background-color:oklch(96.833%_0.01405_-72.601)]"
      ></div
      ><FooterCopyright
    /></div
    ></div
  ></footer
>
);
}
export default MyFooter;
