import React from 'react'
import {useState} from 'react'


const Dark = () => {
// const [darkMode,setDarkMode] = useState("dark")
const setDarkMode = () =>{
    document.querySelector("body").setAttribute("data-theme",'dark')
}
const setLightMode = () =>{
    document.querySelector("body").setAttribute("data-theme",'dark')
}

const toggleTheme =(e)=>{
    if(e.target.checked)setDarkMode();
    else setLightMode();
}
  return (
    <div>
      <input
      className='dark_mode_'/>
    </div>
  )
}

export default Dark
