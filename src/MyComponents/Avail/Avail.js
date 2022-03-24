import React, {Component} from 'react';
import styles from './Avail.module.css';



import CalendarIcon from '../../assets/Group 2.png';

const { availWrapper,
     availHeader,
     availMain,
     availDays,
     availCheck } = styles;


class Avail extends Component {
    render() {
        return (
            <div className={availWrapper}>

                <div className={availHeader}>
                    <img src={CalendarIcon} alt="" />
                    <p>General Availability</p>
                </div>

                

                <div className={availMain}>
                    <div className={availDays}>
                            <h2>Weekdays (Mon - Fri)</h2>
                            <h4>Available from</h4>
                            <input className={availCheck} type="radio" name="available" id="weekdays" />
                            <label for="weekdays">Enabled</label>
                        <input type="text" />
                        <span>To</span>
                        <input type="text"/>
                    </div>

                    

                    <div className={availDays}>
                            <h2>Weekends (Sat - Sun)</h2>
                            <h4>Available from</h4>
                            <input className={availCheck} type="radio" name="available" id="weekends" />
                            <label for="weekends">Enabled</label>
                        <input type="text" />
                        <span>To</span>
                        <input type="text"/>
                    </div>
                </div>



            </div>
        );
    }
}

export default Avail;