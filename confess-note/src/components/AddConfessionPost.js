import React,{useState} from 'react'
import "../assets/css/AddConfessionPost.css"
import {FaLock} from 'react-icons/fa'
import { database as db,set,ref, onValue, database } from '../config/firebase'
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toast'

const AddConfessionPost = () => {
  const[text,setText]=useState("")
  const addConfession=()=>{
    if(text){
        set(ref(db, 'confessions/' + uuidv4()), {
    note: text,
    createdAt: Date.now() ,
   
  }).then((err)=>{
    if(!err){
      toast.success("Succesfully added")
      setText("")
      onValue(ref(db,"confessions"),(snapshot)=>{
        let _data=snapshot.val()
          for (let key in _data) {
    // keep Firebase field: createdAt
     let expiryTime = new Date (_data[key].createdAt);
      // ✅ renamed variable
    //  console.log(_data[key].note)
    // add 1 day (24 hours)
    expiryTime.setDate(expiryTime.getDate() + 1);
     
    if (new Date() >= expiryTime) {
      set(ref(db, "confessions/" + key), null);
      console.log("exceed 24hrs need to be deleted");
    }
  }
      })
    }
    else toast.error("Not added")

  })
    }
    else {
      toast.error("Please add some note")
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
        <ToastContainer delay={2500}/>
    </center>
  )
}

export default AddConfessionPost