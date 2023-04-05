import firebaseApp from "../../firebaseConfig";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { collection, query, getFirestore, getDocs } from "firebase/firestore";
const db = getFirestore(firebaseApp);

const Admin = ()=>{
    const [submissions, setSubmission] = useState([])
    console.log(submissions)
    useEffect(()=>{
        const arr = []
        const q = query(collection(db, "submissions"));
        const getDocuments= async()=>{
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            arr.push(doc.data())
            });
            setSubmission([...arr])
        }
        getDocuments()
    },[])
    return(
        <div className="bg-backgroundImg pb-4 font-DMSans min-h-full min-w-full">
            <Navbar/>
            <div className="w-[80vw] flex-col mx-auto">
                {submissions.map((i)=>{
                return(
                    <div className="bg-glass my-3  flex justify-between p-4 text-xl sm:text-xl md:text-2xl lg:text-3xl">
                        <p>{i.team}</p>
                        <p>{i.category}</p>
                        <p>{i.statement}</p>
                        <a href={i.link} target="_blank" rel="noopener noreferrer">Link</a>
                    </div>
                )
                })}
            </div>
        </div>
    )   
}

export default Admin