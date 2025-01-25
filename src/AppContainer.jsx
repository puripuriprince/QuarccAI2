import React from 'react';
import MyHeader from './MyHeader.jsx';
import MyMain from './MyMain.jsx';
import MyFooter from './MyFooter.jsx';

function AppContainer(prop) {
    return (
<div className="flex relative flex-col min-h-screen [background-color:oklch(97.69%_0.00107_-72.824)]"
><MyHeader
/><MyMain
/><MyFooter
/></div
>
);
}
export default AppContainer;
