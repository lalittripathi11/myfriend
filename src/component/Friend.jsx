import React, { useState } from 'react'
// import './Friend.css'

export default function Friend(props) {
  const [showName, setShowName] = useState(true);
  return (
    <>
   
    <div max-w-sm rounded-2xl bg-green-200 p-6 shadow-lg transition hover:shadow-2xl>
       <img src={props.image} className="h-32 w-32 rounded-full object-cover transition-transform duration-300 hover:scale-110"/>
       <h3 className="text-lg font-bold"> 
        {showName && (
        <h3 className="text-lg font-bold">
          {props.name}
        </h3>
      )}</h3>
       <p className="mt-2 text-gray-500">{props.description}</p> 
        <button
        onClick={() => setShowName(!showName)}
        className="mt-2 rounded bg-blue-600 px-3 py-1 text-white"
      >
        {showName ? "Hide Name" : "Show Name"}
      </button>
    </div>
    
    </>
  )
}