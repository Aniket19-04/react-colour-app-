import React from 'react'
import colorNames from 'colornames';

const Input = ({ colorValue, setColorValue, setHexValue, isDarkTxt, setIsDarkTxt }) => {
    return (
        <form onSubmit={(e) => e.preventDefault}>
            <label>Add Color Name</label>
            <input
                autoFocus
                type="text"
                placeholder='Add Color Name'
                required
                value={colorValue}
                onChange={(e) => {
                    setColorValue(e.target.value);
                     setHexValue(colorNames(e.target.value));
                }}
            />
            <button type='submit' onClick={() => setIsDarkTxt(!isDarkTxt)}>Submit Text Color</button>
        </form>
    )
}

export default Input