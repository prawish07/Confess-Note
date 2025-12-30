import React,{useState} from 'react'
import "../assets/css/AddConfessionPost.css"
import {FaLock} from 'react-icons/fa'
import { database as db,set,ref } from '../config/firebase'
import { v4 as uuidv4 } from 'uuid';
const AddConfessionPost = () => {
  const[text,setText]=useState("")
  const addConfession=()=>{
    if(text){
        set(ref(db, 'confessions/' + uuidv4()), {
    note: text,
    createdAt: Date.now() ,
   
  }).then((err)=>{
    if(!err){
      console.log("Succesfully added")
      setText("")
    }
    else console.log("Not added")

  })
    }
  }
  return (
    <center>
        <div className='add-confesion-post'>
            <textarea rows="8" cols="70"
            placeholder='Write your Confession here...'
            value={text}
            onChange={(e)=>setText(e.target.value)}> 

            </textarea><br/>
            <button className='confess-btn'
            onClick={()=>addConfession()}>Confess</button>
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