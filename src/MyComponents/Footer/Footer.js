import React from 'react';
import styles from './Footer.module.css';
import Lists from '../../config/footerLinks';

const { mainFooter,
        footerLinks,
        footerLink,
        socialLinks,
        socialLink
} = styles;


const footer = () => {
    return (
        <footer className={mainFooter}>
            <ul className={footerLinks}>
                <h3>{Lists.listOne.Header}</h3>
                {Lists.listOne.lists.map(list => 
                <li className={footerLink}>{list}</li>
            )}
            </ul>
            <ul className={footerLinks}>
            <h3>{Lists.listTwo.Header}</h3>
                {Lists.listTwo.lists.map(list => 
                <li className={footerLink}>{list}</li>
            )}
            </ul>
            <ul className={footerLinks}>
            <h3>{Lists.listThree.Header}</h3>
                {Lists.listThree.lists.map(list =>
                <li className={footerLink}>{list}</li>
            )}
            </ul>
            <ul className={footerLinks}>
                <h3>{Lists.listFour.HeaderOne}</h3>
                <div className={socialLinks}>
                    {Lists.listFour.lists.map(list =>
                        <img className={socialLink} src={list} alt="" />
                    )}
                </div>
                <h5>&copy;{Lists.listFour.HeaderTwo}</h5>
            </ul>
        </footer>
    );
}

export default footer;