import { useState } from "react";

function EventIntake() {

    const [newEvent, setNewevent] = useState({});
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

    return (
        <div>
        <form>
            <label htmlFor="piece-name">Piece</label><br/>
            <input id="piece-name" name="piece-name" type="text" placeholder="Undertale Variations" /><br/>
            <label htmlFor="start-time">Start Time:</label><br/>
            <input id="start-time" name="start-time" type="time" /><br/>
            <label htmlFor="end-time">End Time:</label><br/>
            <input id="end-time" name="end-time" type="time" />
            <input type="submit"/>
        </form>
        </div>
    );
}

export default EventIntake;