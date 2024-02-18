import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


function EditEvent({ selectedDate }) {
    const dispatch = useDispatch();
    const createdEvents = useSelector(store => store.calendarEvents);
    const selectedEvent = useSelector(store => store.selectedEvent);
    // Don't use startTime and endTime because those create a recurring event
    const [editedEvent, setEditedEvent] = useState({
        title: selectedEvent.title,
        start: selectedEvent.start,
        end: selectedEvent.end
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
        setEditedEvent((currentInfo) => ({ ...currentInfo, [name]: value }));

    }

    // This will need to be changed to a PUT dispatch

    // const addEvent = (e) => {
    //     e.preventDefault();
    //     const payload = {
    //         title: editedEvent.title,
    //         start: selectedDate + "T" + editedEvent.start,
    //         end: selectedDate + "T" + editedEvent.end
    //     }

    //     dispatch({ type: "ADD_EVENT", payload });
    //     setEditedEvent({
    //         title: "",
    //         start: "",
    //         end: "",
    //     });
    //     const dialog = document.querySelector("dialog");
    //     dialog.close();
    // }

    useEffect(() => {
        alert(`Stringification of selectedEvent.start: ${JSON.stringify(selectedEvent.start)}`);
        if (Object.keys(selectedEvent).length !== 0) {
            alert(`This is a portion of the string: ${JSON.stringify(selectedEvent.start).split("T")[1].substring(0, 5)}`)//.split("T")[1].split(".")[0]);
            setEditedEvent({
                title: selectedEvent.title,
                start: JSON.stringify(selectedEvent.start).split("T")[1].substring(0, 5),
                end: JSON.stringify(selectedEvent.end).split("T")[1].substring(0, 5)
            });
            alert(`This is the selected event:${JSON.stringify(selectedEvent)}`);
        }   // This almost fixes it. Takes two clicks, but it does update
    }, [selectedEvent]);

    return (
        <div>
            <dialog>
                <form>
                    <label htmlFor="title">Piece</label><br />
                    <input id="title" name="title" type="text" placeholder="Undertale Variations" value={editedEvent.title} onChange={handleChange} /><br />
                    <label htmlFor="start">Start</label><br />
                    <input id="start" name="start" type="time" value={editedEvent.start} onChange={handleChange} /><br />
                    <label htmlFor="end">End</label><br />
                    <input id="end" name="end" type="time" value={editedEvent.end} onChange={handleChange} /><br />
                    <input type="submit" />
                </form>
            </dialog>
        </div>
    );
}

//{"allDay": false, "title":"Undertale Variations", "start":"2024-02-22T"}

export default EditEvent;