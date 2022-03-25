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