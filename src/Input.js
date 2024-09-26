import React from 'react'
import colorNames from 'colornames';
const Input = ({ colorval, Setcolorval,Sethexval,dark,Setdark}) => {
  return (
    <form action="" onSubmit={(e)=>e.preventDefault()}>
      <label className='la'>Add color</label>
      <input type="text"
      autoFocus 
     placeholder='Add Color Name'
    required
    value={colorval}
    onChange={(e)=>{
     Setcolorval(e.target.value);
     Sethexval(colorNames(e.target.value));
    }}
/>
<button
className='center-button'
type="button"
onClick={()=>Setdark(!dark)}
>
Toggle Text Color
</button>
    </form>
  )
}

export default Input