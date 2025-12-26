import React from 'react'
import "../assets/css/AddConfessionPost.css"
import {FaLock} from 'react-icons/fa'
const AddConfessionPost = () => {
  return (
    <center>
        <div className='add-confesion-post'>
            <textarea rows="8" cols="70"
            placeholder='Write your Confession here...'> 

            </textarea><br/>
            <button className='confess-btn'>Confess</button>
        </div>
        <FaLock size="8"/>
        <small
        style={{
            fontSize:"8px",
            marginLeft:"5px"
        }}>Confess Note will remain for 24 hrs</small>
    </center>
  )
}

export default AddConfessionPost