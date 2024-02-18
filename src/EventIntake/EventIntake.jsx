import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


function EventIntake({ selectedDate, selectedEvent, isNewEvent }) {
    const dispatch = useDispatch();
    const createdEvents = useSelector(store => store.calendarEvents);
    // Don't use startTime and endTime because those create a recurring event
    const [newEvent, setNewEvent] =  useState({
        title: isNewEvent ? "" : selectedEvent.title,
        start: isNewEvent ? "" : selectedEvent.start,
        end: isNewEvent ? "" : selectedEvent.end
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
        alert(Object.keys(selectedEvent).length);
        alert(`Stringification of selectedEvent.start: ${JSON.stringify(selectedEvent.start)}`);
        if (Object.keys(selectedEvent).length !== 0) {
        alert(`This is a portion of the string: ${JSON.stringify(selectedEvent.start).split("T")[1].substring(0, 5)}`)//.split("T")[1].split(".")[0]);
        setNewEvent({
            title: isNewEvent ? "" : selectedEvent.title,
            start: isNewEvent ? "" : JSON.stringify(selectedEvent.start).split("T")[1].substring(0, 5),//[1].split("Z")[0],//.substring(12, 20),//.split("T")[1],
            end: isNewEvent ? "" : JSON.stringify(selectedEvent.end).split("T")[1].substring(0, 5)//[1].split("Z")[0]
        });
        alert(`This is the selected event:${JSON.stringify(selectedEvent)}`);
    }
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

//{"allDay": false, "title":"Undertale Variations", "start":"2024-02-22T"}

export default EventIntake;