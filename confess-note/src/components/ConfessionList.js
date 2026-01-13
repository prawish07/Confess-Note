import React, { useEffect, useState } from 'react'
import '../assets/css/ConfessionList.css'
import { database,set,ref,onValue } from '../config/firebase'
// import Moment from 'react-moment';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);




const ConfessionList = () => {
    const[confessionList,setConfessionList]=useState([])
    const monthList=['Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'July',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ]

    useEffect(()=>{
        onValue(ref(database,"confessions"),(snapshot)=>{
            let _data=snapshot.val()
            let _confessionList=[]
            for(let key in _data){
                _confessionList.push(_data[key])
            }
            setConfessionList(_confessionList)
        })

    },[])
  return (
    <center>
        <div className='confession-list'>
            {confessionList.map((confesion,index)=>{
                let _date=new Date(confesion.createdAt)
                return <div key={index}
                className='confession-card'>
                    <div>{`${_date.getFullYear()}
                     ${monthList[_date.getMonth()]}
                     ${_date.getDate()}`}</div>
                     <br/>
                     <br/>
                    {confesion.note}
                    <br/>
                    <div className='time-ago'>
                       {/* <Moment fromNow>{confesion.createdAt}</Moment>

                          */}
                          {/* {new Date(confesion.createdAt).toLocaleString()} */}

                         {dayjs(confesion.createdAt).fromNow()}

                    </div>
                </div>

            })}

        </div>
    </center>
  )
}

export default ConfessionList