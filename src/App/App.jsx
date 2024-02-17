import './App.css'
import CalendarDisplay from '../Calendar/CalendarDisplay';
import EventIntake from '../EventIntake/EventIntake';

function App() {

  const calendarEvents = [];

  return (
    <>
      <CalendarDisplay
        calendarEvents={ calendarEvents } />
      <EventIntake
        calendarEvents={ calendarEvents } />
    </>
  )
}

export default App
