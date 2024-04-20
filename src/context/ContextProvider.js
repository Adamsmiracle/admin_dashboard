import React, { createContext, useContext, useEffect } from "react"

const stateContext = createContext();

const initialState = {
    Chat: false,
    Cart: false,
    UserProfile: false,
    Notification: false
}