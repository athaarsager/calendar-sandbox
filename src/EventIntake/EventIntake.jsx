import { useState } from "react";

function EventIntake() {

    const [newEvent, setNewevent] = useState({
        title: "",
        start: "",
        startTime: "",
        endTime: ""
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

        setNewevent((currentInfo) => ({...currentInfo, [name]: value}));
    }

    const addEvent = (e) => {
        e.preventDefault();
        calendar.addEvent(newEvent);
    }

    return (
        <div>
        <form >
            <label htmlFor="title">Piece</label><br/>
            <input id="title" name="title" type="text" placeholder="Undertale Variations" value={newEvent.title} onChange={handleChange}/><br/>
            <label for="start">Date</label><br/>
            <input id="start" name="start" type="date" value={newEvent.start} onChange={handleChange}/><br/>
            <label htmlFor="startTime">Start Time:</label><br/>
            <input id="startTime" name="startTime" type="time" value={newEvent.startTime} onChange={handleChange}/><br/>
            <label htmlFor="endTime">End Time:</label><br/>
            <input id="endTime" name="endTime" type="time" value={newEvent.endTime} onChange={handleChange} />
            <input type="submit"/>
        </form>
        </div>
    );
}

export default EventIntake;