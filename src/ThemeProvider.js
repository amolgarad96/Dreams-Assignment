import React, { createContext, useState } from 'react'

export const UseContext = createContext();
function ThemeProvider({children}) {
    const [dark,setDark] = useState(false);

    const handleDarkMode = () =>{
        setDark(!dark)
    }


    return (
        <>
            <UseContext.Provider value={{dark,handleDarkMode}} >
                {children}
            </UseContext.Provider>

        </>
    )
}

export default ThemeProvider