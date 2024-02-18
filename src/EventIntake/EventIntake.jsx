import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


function EventIntake({ selectedDate, isNewEvent }) {
    const dispatch = useDispatch();
    const createdEvents = useSelector(store => store.calendarEvents);
    const newestEvent = createdEvents[createdEvents.length-1];
    // Don't use startTime and endTime because those create a recurring event
    const [newEvent, setNewEvent] =  useState({
        title: isNewEvent ? "" : newestEvent.title,
        start: isNewEvent ? "" : newestEvent.start,
        end: isNewEvent ? "" : newestEvent.end
    });

    // const newestEvent = useSelector(store => store.calendarEvents);
    // const [newEvent, setNewEvent] = 
    // })


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
        setNewEvent((currentInfo) => ({ ...currentInfo, [name]: value }));

    }

    const addEvent = (e) => {
        e.preventDefault();
        const payload = {
            title: newEvent.title,
            start: selectedDate + "T" + newEvent.start,
            end: selectedDate + "T" + newEvent.end
        }

        dispatch({ type: "ADD_EVENT", payload });
        setNewEvent({
            title: "",
            start: "",
            end: "",
        } );
        const dialog = document.querySelector("dialog");
        dialog.close();
    }

    useEffect(() => {
        setNewEvent({
            title: isNewEvent ? "" : newestEvent.title,
            start: isNewEvent ? "" : newestEvent.start.split("T")[1],
            end: isNewEvent ? "" : newestEvent.end.split("T")[1]
        });
        alert(`This is the newest event:${JSON.stringify(newestEvent)}`);
    }, [isNewEvent]);

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
                    <input type="submit" />
                </form>
            </dialog>
        </div>
    );
}

export default EventIntake;