import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

function EventIntake({ selectedDate }) {
    const dispatch = useDispatch();

    // Don't use startTime and endTime because those create a recurring event
    const [newEvent, setNewevent] = useState({
        title: "",
        start: "",
        end: "",
    });

    // event object can contain keys such as the following (more can be found at: https://fullcalendar.io/docs/event-parsing ):
    // {
    // id: maybe just grab from database? crap, need table for events...
    // title:
    // start (or startTime): (inclusive)
    // end (or endTime): (exclusive)
    //  }

    const handleChange = (e) => {

        const { name, value } = e.target;

        // currentInfo is another name for state. maybe just call it state in the future
        setNewevent((currentInfo) => ({ ...currentInfo, [name]: value }));

    }

    const addEvent = (e) => {
        e.preventDefault();
        const payload = {
            title: newEvent.title,
            start: selectedDate + "T" + newEvent.start,
            end: selectedDate + "T" + newEvent.end
        }

        dispatch({ type: "ADD_EVENT", payload });

        const dialog = document.querySelector("dialog");
        dialog.close();
    }

    return (
        <div>
            <dialog>
                <form onSubmit={addEvent}>
                    <label htmlFor="title">Piece</label><br />
                    <input id="title" name="title" type="text" placeholder="Undertale Variations" value={newEvent.title} onChange={handleChange} /><br />
                    <label htmlFor="start">Start</label><br />
                    <input id="start" name="start" type="time" value={newEvent.start} onChange={handleChange} /><br />
                    <label htmlFor="end">End</label><br />
                    <input id="end" name="end" type="time" value={newEvent.end} onChange={handleChange} /><br />
                    {/* <label htmlFor="startTime">Start Time:</label><br/>
            <input id="startTime" name="startTime" type="time" value={newEvent.startTime} onChange={handleChange}/><br/>
            <label htmlFor="endTime">End Time:</label><br/>
            <input id="endTime" name="endTime" type="time" value={newEvent.endTime} onChange={handleChange} /> */}
                    <input type="submit" />
                </form>
            </dialog>
        </div>
    );
}

export default EventIntake;