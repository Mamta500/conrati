// import React from "react";
// import '../../App.css';
// import logo from '../../assets/logo.png'
// import header from '../../assets/header.png'

// export default function Header() {
//     return(
        
//             <>
//             <div>
//                 <img className="img-class" src={logo} alt="Logo" />
//             </div>
//             <div className="container">
//                 <img className="img-class1" src={header} alt="BlueHeader" />
//                 <div className="centered">
//                     <h3>11:45 Tuesday</h3>
//                     <p>05 September 2018</p>
//                 </div>
//             </div>
//             </>
            
            
//     )
// }

import React from 'react';
import styles from './Header.module.css';
import Times from '../../config/time'
import Logo from '../../assets/logo.png';

const { 
    logoArea,
    logoIcon,
    mainHeader,
    mainHeaderTime,
    mainHeaderDate,
    calendarTab,
    headerButtons
 } = styles;

let today = new Date();

const currentTime = () => {
    return today.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

const currentDay = () => {
    return Times[0][today.getDay()]
}

const currentDate = () => {
   return `${(today.getDate() > 10)? today.getDate() : `0${today.getDate()}`} 
        ${Times[1][today.getMonth()]}
        ${today.getFullYear()}
   ` 
}

const header = () => {
    return (
        <><div className={logoArea}>
        <img className={logoIcon} src={Logo} alt="" />
        </div>
        <header className={mainHeader}>
            <h3 className={mainHeaderTime}>{currentTime()} &bull; {currentDay()}</h3>
            <p className={mainHeaderDate}>{currentDate()}</p>
            
            <div className={headerButtons}>
                <span className={calendarTab}>Calendar</span>
            </div>
        </header>
        </>
    );
};

export default header;