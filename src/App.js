import React from 'react'
import {useState} from 'react'
import './index.css';
import Square from './Square'
import Input from './Input'
import Head from './Head';
function App() {
  const [hexval,Sethexval]=useState('')
const [colorval,Setcolorval]=useState('')
 const [dark,Setdark]=useState(true)
  return (
 <div className='App'>
  <Head />
  <Square
  hexval={hexval}
  colorval={colorval}
  dark={dark}
  
  />
  <Input 
  Sethexval={Sethexval}
  colorval={colorval}
  Setcolorval={Setcolorval}
  dark = {dark}
  Setdark={Setdark}
  />

 </div>
 
  )
}

export default App;
