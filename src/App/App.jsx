import './App.css'
import CalendarDisplay from '../Calendar/CalendarDisplay';
import EventIntake from '../EventIntake/EventIntake';

function App() {

  const calendarEvents = [];

  return (
    <div className='container-container'>
      <CalendarDisplay
        calendarEvents={ calendarEvents } />
      <EventIntake
        calendarEvents={ calendarEvents } />
    </div>
  )
}

export default App
