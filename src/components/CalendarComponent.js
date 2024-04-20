import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { Tooltip as ReactTooltip } from 'react-tooltip';

function CalendarComponent({ actions }) {
    const [selectedDate, setSelectedDate] = useState(new Date());

    
    const handleDayClick = (value) => {
        setSelectedDate(value);
        
    };

    
    const actionsForSelectedDate = actions.filter(action => {
        const actionDate = new Date(action.date);
        return actionDate.toDateString() === selectedDate.toDateString();
    });

    return (
        <>
            <Calendar onClickDay={handleDayClick} />
            
            {actionsForSelectedDate.length > 0 && (
                <div data-tip data-for="actionDetailsTip">
                    Cliquez pour voir les actions
                </div>
            )}
            <ReactTooltip id="actionDetailsTip" place="top" effect="solid">
                {actionsForSelectedDate.map((action, index) => (
                    <p key={index}>{action.title}</p>
                ))}
            </ReactTooltip>
        </>
    );
}

export default CalendarComponent;
