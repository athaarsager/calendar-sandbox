import React, { useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // need this for dateClick
import { useSelector } from 'react-redux';


export default function CalendarDisplay() {

  // create reference here. Set it to FullCalendar component (once it's rendered) by passing it to the component as a prop
  const calendarRef = useRef(null);

  const calendarEvents = useSelector(store => store.calendarEvents);
  const displayEvent = (eventInfo) => {
    alert(eventInfo.event.start);
  }

  const selectDate =  dateClickInfo => {
    // ref will now reference the FullCalendar component and grant access to its API
    calendarRef.current
      .getApi()
      .changeView("timeGridDay", dateClickInfo.date);
  }

  return (
    // Calendar will always take up its entire container width 
    // Can manually set height via props
    // Can also use aspectRatio to adjust height
    // Apparently you don't even need to re-size the height if you have the width selected
      <div className="calendar-container">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={calendarEvents}
          eventClick={displayEvent}
          // making the time display false here because it messes up the display if the event is on a Saturday
          // user will click event to view time
          displayEventTime={false}
          dateClick={selectDate}
          headerToolbar={{
           center: "dayGridMonth timeGridDay"
          }}
        />
      </div>
  );

}