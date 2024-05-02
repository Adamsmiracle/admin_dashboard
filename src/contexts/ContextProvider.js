import React, { createContext, useContext, useEffect, useState } from "react"

const StateContext = createContext();

const initialState = {
    Chat: false,
    Cart: false,
    UserProfile: false,
    Notification: false
}

export const ContextProvider = ({ children }) => { 
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurrentMode] = useState("Light")
    const [themeSettings, setThemeSettings] = useState(false)
    const [cartDisplay, setCartDisplay] = useState(true)

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked] : [!clicked] })
        setCartDisplay(true)
    }

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
        setThemeSettings(false);
    }  
    const setColor = (mode) => {
        setCurrentColor(mode);
        localStorage.setItem('colorMode', mode);
        setThemeSettings(false);

    }

    const cartDropDown = (cartDisplay) => {
    return (setCartDisplay(!cartDisplay))
}

    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                currentColor, currentMode,
                setCurrentColor, setCurrentMode,
                themeSettings, setThemeSettings,
                setColor, setMode,
                cartDisplay, setCartDisplay,
                cartDropDown
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)