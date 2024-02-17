import { createStore, combineReducers } from "redux";
import logger from "redux-logger";

const calendarEvents = (state = [], action) => {
    if (action.type = "ADD_EVENT") {
        return [...state, action.payload];
    }
    return state;
}

const store = createStore(
    combineReducers({
        calendarEvents
    })
);

export default store;