import LinkedinIcon from '../assets/social_linkedin.png';
import FacebookIcon from '../assets/social_facebook.png';
import TwitterIcon from '../assets/social_twitter.png';
import YoutubeIcon from '../assets/social_youtube_default.png';
const lists = {
    listOne : {
        Header: 'COMPANY',
        lists: ['About Us',
        'Contact Us',
        'Disclaimers']
    },

    listTwo: {
        Header: 'HELP',
        lists: [
            'How it Works',
            'Support',
            'Trust and Saftey'
        ]
    },

    listThree: {
        Header: "LEGALITIES",
        lists: [
            'Privacy',
            'Terms and Conditions',
            'Code of Conduct'
        ]

    },

    listFour : {
        HeaderOne: 'CONNECT WITH US',
        HeaderTwo: 'Copyright Conrati 2018',
        lists: [
            LinkedinIcon,
            FacebookIcon,
            TwitterIcon,
            YoutubeIcon
        ]
    }
}



export default lists;