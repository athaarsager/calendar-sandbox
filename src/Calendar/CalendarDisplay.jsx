import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import { useSelector } from 'react-redux';


export default function CalendarDisplay() {

  const calendarEvents = useSelector(store => store.calendarEvents);
  const displayEvent = (eventInfo) => {
  }

  return (
    // Calendar will always take up its entire container width 
    // Can manually set height via props
    // Can also use aspectRatio to adjust height
    // Apparently you don't even need to re-size the height if you have the width selected
      <div className="calendar-container">
        <FullCalendar
          plugins={[dayGridPlugin,]}
          initialView="dayGridMonth"
          events={calendarEvents}
          eventClick={displayEvent}
          displayEventTime={false}
        />
      </div>
  );

}