import { createStore, combineReducers } from "redux";
//import logger from "redux-logger";

const calendarEvents = (state = [], action) => {
    if (action.type === "ADD_EVENT") {
        return [...state, action.payload];
    }
    return state;
}

const selectedEvent = (state = {}, action) => {
    if (action.type === "SET_EVENT") {
        return action.payload;
    }
    return state;
}


const store = createStore(
    combineReducers({
        calendarEvents,
        selectedEvent
    })
);

export default store;