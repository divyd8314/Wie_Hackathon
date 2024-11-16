// Calendar.js
import React from 'react';

const Calendar = ({ setCurrentPage }) => {
    return (
        <div className="page-container">
            <nav className="nav-bar">
                <button onClick={() => setCurrentPage('home')} className="nav-button">Back to Home</button>
            </nav>
            <h1>Calendar Page</h1>
        </div>
    );
};

export default Calendar;