import React,{useState} from "react";
import Navbar from "../components/Navbar";


const leaderboard = [
    {
        team:"xyz",
        score:"10"
    },
    {
        team:"xyz",
        score:"11"
    },{
        team:"xyz",
        score:"12"
    },{
        team:"xyz",
        score:"13"
    },{
        team:"xyz",
        score:"14"
    },{
        team:"xyz",
        score:"15"
    },{
        team:"xyz",
        score:"16"
    },{
        team:"xyz",
        score:"17"
    },{
        team:"xyz",
        score:"18"
    },
]

leaderboard.sort((b,a)=> a.score - b.score)

const Leaderboard = ()=>{
    return (
        <div className="bg-backgroundImg pb-4 font-DMSans min-h-full min-w-full">
            <Navbar/>
            <div className="w-[80vw] flex-col mx-auto">
                {leaderboard.map((i)=>{
                return(
                    <div className="bg-glass my-3  flex justify-between p-4 text-xl sm:text-xl md:text-2xl lg:text-3xl">
                        <p>{i.team}</p>
                        <p>{i.score}</p>
                    </div>
                )
                })}
            </div>
        </div>
    )
}

export default Leaderboard