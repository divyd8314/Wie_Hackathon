import React from "react";
import "./StoryCard.css"; // Import the CSS for the card styles


const StoryCard = ({ title, author, content }) => {
    return (
        <div className="story-card">
            <h2>{title}</h2>
            <h4>By {author}</h4>
            <p>{content}</p>
        </div>
    );
};


export default StoryCard;