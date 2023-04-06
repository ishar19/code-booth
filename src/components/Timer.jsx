import React from 'react'
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
const Timer = ()=>{
    return(
    <>
    <div className="mt-20 flex flex-col items-center font-DMSans gap-4">
      <div className="bg-glass text-3xl sm:text-3xl md:text-3xl lg:text-5xl py-4 px-7 rounded-md w-[80vw] md:w-[60vw] lg:w-[60vw] text-center">
       Event Starts In
      </div>
      <FlipClockCountdown to={new Date(1680757200).getTime()*1000}  // timestamp for event starting
        labelStyle={{color:"black"}}
        separatorStyle={{color:"black"}}
        digitBlockStyle={{
            background: "linear-gradient(102.58deg, rgba(255, 255, 255, 0.6) 5.02%, rgba(255, 255, 255, 0.3) 97.15%)",
            boxShadow: "0px 10px 16px 4px rgba(0, 0, 0, 0.15)",
            backdropFilter: "blur(40px)",
            color:"black",
            width:"7vw",
            fontSize:"3vw",
            height:"7vw"
        }}
      />
    </div>
    </>
    )
}

export default Timer