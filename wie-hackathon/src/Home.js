// Home.js
import React from 'react';
import './Home.css';

const Home = ({ setCurrentPage }) => {
    return (
        <div className="home-container">
            <nav className="nav-bar">
                <div className="nav-brand">WIE Portal</div>
                <div className="nav-items">
                    <button onClick={() => setCurrentPage('calendar')} className="nav-button">Calendar</button>
                    <button onClick={() => setCurrentPage('story')} className="nav-button">Story</button>
                    <button onClick={() => setCurrentPage('connections')} className="nav-button">Connections</button>
                    <button onClick={() => setCurrentPage('games')} className="nav-button">Games</button>
                </div>
            </nav>
            
            <main className="main-content">
                <div className="welcome-section">
                    <h1>Welcome to Your Learning Journey</h1>
                    <p>Explore, Connect, and Grow Together</p>
                </div>
                <div className="image-container">
                    <img 
                        src="/api/placeholder/800/400" 
                        alt="Diverse children learning together" 
                        className="main-image"
                    />
                </div>
            </main>
        </div>
    );
};

export default Home;