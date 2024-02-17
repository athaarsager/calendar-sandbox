import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App/App.jsx'
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import store from '../redux/store.js';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App />
    </Provider>
)
