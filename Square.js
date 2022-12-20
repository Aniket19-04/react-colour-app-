import React from 'react'

const Square = ({colorValue,hexValue,isDarkTxt}) => {
  return (
    <section
    className='square' style={{backgroundColor: colorValue}}>
    <p>{colorValue ? colorValue:"Empty Value"}</p>
    <p>{hexValue ? hexValue:null}</p>
    <p>{isDarkTxt ? isDarkTxt:null}</p>
    </section>
  )
}

Square.defaultProps={
    colorValue:"Empty Color Value"
}

export default Square