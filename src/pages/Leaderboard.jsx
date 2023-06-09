import firebaseApp from "../../firebaseConfig";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { collection, query, getFirestore, getDocs } from "firebase/firestore";
const db = getFirestore(firebaseApp);

const Leaderboard = ()=>{
    const [leaderboard, setLeaderboard] = useState([])
    console.log(leaderboard)
    useEffect(()=>{
        const arr = []
        const q = query(collection(db, "scores"));
        const getDocuments= async()=>{
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            arr.push(doc.data())
            arr.sort((b,a)=> a.score - b.score)
            });
            setLeaderboard([...arr])
        }
        getDocuments()
    },[])
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