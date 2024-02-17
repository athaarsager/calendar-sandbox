import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import { useSelector } from 'react-redux';


export default function CalendarDisplay() {

  const calendarEvents = useSelector(store => store.calendarEvents);
  const displayEvent = (eventInfo) => {
    alert(eventInfo.event.start);
  }

  return (
    // Calendar will always take up its entire container width 
    // Can manually set height via props
    // Can also use aspectRatio to adjust height
    // Apparently you don't even need to re-size the height if you have the width selected
      <div className="calendar-container">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin]}
          initialView="timeGridDay"
          events={calendarEvents}
          eventClick={displayEvent}
          // making the time display false here because it messes up the display if the event is on a Saturday
          // user will click event to view time
          displayEventTime={false}
        />
      </div>
  );

}