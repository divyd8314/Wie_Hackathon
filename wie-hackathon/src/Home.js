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
                    <h1 className="welcome-title">Welcome to HeritEdge</h1>
                    <p className="welcome-description">Explore, Connect, and Grow Together</p>
                    <button className="action-button">Start Exploring</button>
                </div>
                <div className="image-container">
                    <img 
                        src="/logo.png" 
                        className="main-image"
                    />
                </div>
            </main>
        </div>
    );
};

export default Home;
