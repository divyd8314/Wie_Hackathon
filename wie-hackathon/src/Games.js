// Calendar.js
import React from 'react';

const Games = ({ setCurrentPage }) => {
    return (
        <div className="page-container">
            <nav className="nav-bar">
                <button onClick={() => setCurrentPage('home')} className="nav-button">Back to Home</button>
            </nav>
            <h1>Games Page</h1>
        </div>
    );
};

export default Games;