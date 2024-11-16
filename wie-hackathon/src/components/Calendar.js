import React, { useState } from "react";
import "./Calendar.css";


const Calendar = ({ onDateSelect }) => {
 const [currentMonth, setCurrentMonth] = useState(new Date());


 const daysInMonth = (year, month) => {
   return new Date(year, month + 1, 0).getDate();
 };


 const renderDays = () => {
   const year = currentMonth.getFullYear();
   const month = currentMonth.getMonth();
   const days = [];
   const totalDays = daysInMonth(year, month);


   for (let i = 1; i <= totalDays; i++) {
     const date = new Date(year, month, i);
     const formattedDate = date.toISOString().split("T")[0];
     days.push(
       <button
         key={i}
         onClick={() => onDateSelect(formattedDate)}
         className="day-button"
       >
         {i}
       </button>
     );
   }
   return days;
 };


 const changeMonth = (offset) => {
   const newMonth = new Date(
     currentMonth.getFullYear(),
     currentMonth.getMonth() + offset,
     1
   );
   setCurrentMonth(newMonth);
 };


 return (
   <div className="calendar">
     <div className="calendar-header">
       <button onClick={() => changeMonth(-1)} className="nav-button">
         ⬅️
       </button>
       <span>
         {currentMonth.toLocaleString("default", { month: "long" })}{" "}
         {currentMonth.getFullYear()}
       </span>
       <button onClick={() => changeMonth(1)} className="nav-button">
         ➡️
       </button>
     </div>
     <div className="calendar-days">{renderDays()}</div>
   </div>
 );
};


export default Calendar;