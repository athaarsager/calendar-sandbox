import { createStore, combineReducers } from "redux";
//import logger from "redux-logger";

const calendarEvents = (state = [], action) => {
    if (action.type === "ADD_EVENT") {
        return [...state, action.payload];
    }
    return state;
}

// const createdEvent = (state = {title: "practice", start: "02-20-2024", startTime: "01:00", endTime: "02:00" }, action) => {
//     if (action.type === "SET_EVENT") {
//         //return action.payload;
//         return state;
//     } else {
//     return state; }
// }

const store = createStore(
    combineReducers({
        calendarEvents,
        //createdEvent
    })
);

export default store;