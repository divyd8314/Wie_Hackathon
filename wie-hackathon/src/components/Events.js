import React from "react";
import "./Events.css";
const holidays = {
   "2024-01-01": [
     { country: "USA", name: "New Year's Day" },
     { country: "Japan", name: "Ganjitsu (New Year's Day)" },
     { country: "Australia", name: "New Year's Day" },
     { country: "Canada", name: "New Year's Day" },
   ],
   "2024-02-14": [
     { country: "USA", name: "Valentine's Day" },
     { country: "Italy", name: "San Valentino (Valentine's Day)" },
     { country: "South Korea", name: "Valentine's Day" },
   ],
   "2024-05-01": [
     { country: "International", name: "International Workers' Day (Labour Day)" },
     { country: "Germany", name: "Tag der Arbeit (Labour Day)" },
     { country: "Brazil", name: "Dia do Trabalhador (Labour Day)" },
   ],
   "2024-07-04": [{ country: "USA", name: "Independence Day" }],
   "2024-10-31": [
     { country: "USA", name: "Halloween" },
     { country: "Canada", name: "Halloween" },
     { country: "Mexico", name: "Día de los Muertos (Day of the Dead)" },
   ],
   "2024-11-11": [
     { country: "USA", name: "Veterans Day" },
     { country: "Canada", name: "Remembrance Day" },
     { country: "UK", name: "Remembrance Day" },
   ],
   "2024-12-25": [
     { country: "Global", name: "Christmas Day" },
     { country: "Germany", name: "Weihnachten" },
     { country: "UK", name: "Christmas Day" },
     { country: "Australia", name: "Christmas Day" },
     { country: "Mexico", name: "Navidad (Christmas)" },
   ],
   "2024-12-31": [
     { country: "Global", name: "New Year's Eve" },
     { country: "Scotland", name: "Hogmanay (New Year's Eve)" },
   ],
   "2024-09-21": [
     { country: "Brazil", name: "Brazilian Independence Day" },
     { country: "Mexico", name: "Independence Day" },
     { country: "Chile", name: "Chile's Independence Day" },
   ],
   "2024-11-16": [{ country: "India", name: "Diwali" }],
   "2024-08-15": [
     { country: "India", name: "Independence Day" },
     { country: "South Korea", name: "National Liberation Day" },
   ],
   "2024-06-21": [
     { country: "France", name: "Fête de la Musique (Music Day)" },
     { country: "Germany", name: "Summer Solstice" },
   ],
   "2024-10-02": [
     { country: "India", name: "Gandhi Jayanti" },
     { country: "South Africa", name: "Heritage Day" },
   ],
};


const Events = ({ selectedDate }) => {
 const events = holidays[selectedDate] || [];


 return (
   <div className="events">
     <h2>Holidays on {selectedDate || "Select a date"}</h2>
     {events.length === 0 ? (
       <p>No holidays found for this date. Try another one!</p>
     ) : (
       <div className="event-cards">
         {events.map((event, index) => (
           <div key={index} className="event-card">
             <h3>{event.name}</h3>
             <p>{event.country}</p>
           </div>
         ))}
       </div>
     )}
   </div>
 );
};


export default Events;