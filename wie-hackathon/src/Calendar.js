import React, { useState } from "react";
import Calendar from "./components/Calendar";
import Events from "./components/Events";
import "./Calendar.css";

const CalendarPage = ({ setCurrentPage }) => {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div className="calendar-page">
      <header>
        <h1>Cultural Awareness Calendar 🌏</h1>
        <p>Explore holidays and festivals from around the world!</p>
        <button
          onClick={() => setCurrentPage("home")}
          className="nav-button"
        >
          Back to Home
        </button>
      </header>
      <main>
        <Calendar onDateSelect={setSelectedDate} />
        <Events selectedDate={selectedDate} />
      </main>
    </div>
  );
};

export default CalendarPage;


