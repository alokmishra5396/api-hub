import React, { useState } from 'react'
import './styles/firstProgram.scss'


export const FirstProgra = () => {

const[text, setText] = useState();
const[error, setError] = useState(false)

/*----------to upper Case*/
 const toUpperCase = ()=>{
  if(text.length<1){
    alert('pls ente something')
  }
  var upText = text.toUpperCase();
  setText(upText);
 }
const toCapitalized = ()=>{
  let capText = text.toCapitalized()
  setText(capText);
}

const toLowerCase = ()=>{
  let dnText = text.toLowerCase();
  setText(dnText)
}

const removeWhiteSpace = ()=>{
  let removeText = text.replace(/\s/g, "");
  setText(removeText)
}

const copyClick = ()=>{
  navigator.clipboard.writeText(text);
}

const ClearText = ()=>{
  setText('');
}
 /*--------onChange Function-----*/
 const chValue = (e)=>{
 setText(e.target.value)
 }

  return (
    <div className="container">
    <div className='text-wrapper'>
      <textarea onChange={chValue} value={text} placeholder='please enter the text...'/>
      
      </div>
     <div className='btn-wrapper'>
      <button className='btn' onClick={toUpperCase}>Convert To UpperCase </button>
      <button className='btn' onClick={toLowerCase}>Convert To LowerCase </button>
      <button className='btn' onClick={toCapitalized}>Convert To Capitalized</button>
      <button className='btn' onClick={removeWhiteSpace}>Remove White Space </button>
      <button className='btn' onClick={ClearText}>Clear</button>
      <button className='btn' onClick={copyClick}>Copy To ClipBoard</button>
     </div>
   </div>
  )
}
