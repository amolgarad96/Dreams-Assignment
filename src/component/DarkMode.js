import React, { useContext } from 'react'
import { UseContext } from '../ThemeProvider'
function DarkMode() {
    const data = useContext(UseContext)
    console.log("data",data)
    return (
        <>
            <div className={`DarkStyle ${data.dark ? 'darkcolor' : 'lightcolor'}`}>
                <h2>Enable Dark Mode</h2>
            </div>
            <button onClick={data.handleDarkMode}>click Me</button>
        </>
    )
}

export default DarkMode