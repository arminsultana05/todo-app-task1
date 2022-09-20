import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarPage = () => {
    const [value, onChange] = useState(new Date());
    return (
        <>
            <h1 className='text-center font-bold md:text-4xl text-2xl px-3 mb-5 mt-10'>Time is Precious. Don't waste it!</h1>
            <div className='flex items-center justify-center px-3'>
                <Calendar onChange={onChange} value={value} />
            </div>
        </>
    );
};

export default CalendarPage;