import React from 'react';
import {FaTimes,FaPen,FaRegCircle} from 'react-icons/fa'
import "../App.css"

const Icon = ({name}) => {
   switch (name) {
    case "circle":
        return <FaRegCircle className='icon1'/>

   case "cross":
   return <FaTimes className='icon2' />

   default:
        return <FaPen className='icon' />
        
        
   }
}

export default Icon;
