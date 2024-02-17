import { useState } from "react";
import { useDispatch } from "react-redux";

function EventIntake( {calendarEvents} ) {
    const dispatch = useDispatch();

    // Don't use startTime and endTime because those create a recurring event
    const [newEvent, setNewevent] = useState({
        title: "",
        start: "",
        end: "",
    });

    // syntax for adding event:
    // calendar.addEvent( event [, source])
    // "event" is a plain object that will be parsed into an Event Object
    // source is optional

    // event object can contain keys such as the following (more can be found at: https://fullcalendar.io/docs/event-parsing ):
    // {
        // id: maybe just grab from database? crap, need table for events...
        // title:
        // start (or startTime): (inclusive)
        // end (or endTime): (exclusive)
    //  }
    
    const handleChange = (e) => {

        const {name, value} = e.target;

        // currentInfo is another name for state. maybe just call it state in the future
        setNewevent((currentInfo) => ({...currentInfo, [name]: value}));

        


    }

    const addEvent = (e) => {
        e.preventDefault();
        alert(JSON.stringify(newEvent));

        dispatch({type: "ADD_EVENT", payload: newEvent});
    }

    return (
        <div>
        <form onSubmit={addEvent}>
            <label htmlFor="title">Piece</label><br/>
            <input id="title" name="title" type="text" placeholder="Undertale Variations" value={newEvent.title} onChange={handleChange}/><br/>
            <label htmlFor="start">Start</label><br/>
            <input id="start" name="start" type="datetime-local" value={newEvent.start} onChange={handleChange}/><br/>
            <label htmlFor="end">End</label><br/>
            <input id="end" name="end" type="datetime-local" value={newEvent.end} onChange={handleChange}/><br/>
            {/* <label htmlFor="startTime">Start Time:</label><br/>
            <input id="startTime" name="startTime" type="time" value={newEvent.startTime} onChange={handleChange}/><br/>
            <label htmlFor="endTime">End Time:</label><br/>
            <input id="endTime" name="endTime" type="time" value={newEvent.endTime} onChange={handleChange} /> */}
            <input type="submit"/>
        </form>
        </div>
    );
}

export default EventIntake;