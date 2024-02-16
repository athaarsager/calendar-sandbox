import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default class CalendarDisplay extends React.Component {
  render() {
    return (
      // Calendar will always take up its entire container width 
      //Can manually set height via props
      // Apparently you don't even need to re-size the height if you have the width selected
      <div className="calendar-container">
        <FullCalendar
          plugins={[dayGridPlugin,]}
          initialView="dayGridMonth"
          // height="50vh"
        />
      </div>
    )
  }
}