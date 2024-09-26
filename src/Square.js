import React from 'react'
import './Sqare.css';
const Square = ({colorval,hexval,dark}) => {
  return (
    <section className='sqare'
    style={{
      backgroundColor:colorval,
      color: dark?"#000":"#fff"
    }}
    >
<p>{colorval?colorval:"empty value"}</p>
<p>{hexval?hexval:null}</p>
    </section>
  )
}
Square.defaultProps = {
  colorval:"empty val"
}
export default Square