import React,{useState} from "react";
import Navbar from "../components/Navbar";
import firebaseApp from "../../firebaseConfig";
import { doc, setDoc, getFirestore } from "firebase/firestore"; 
const db = getFirestore(firebaseApp);

const Submission = ()=>{
      const [category, setCategory] = useState("category");
      const [statement, setStatement] = useState("statement");
      const [submission, setSubmission] = useState({
        team:"",
        firstMember:"",
        secondMember:"",
        link:""
      })
      const handleChange = (e)=>{
        setSubmission({...submission,[e.target.name]:e.target.value})
      }
      const handleCategory = (e)=>{
        setCategory(e.target.value)
      }
     const handleProblem = (e)=>{
        setStatement(e.target.value)
      }
      const handleSubmission = async(e)=>{
        e.preventDefault()
        await setDoc(doc(db, "submissions", submission.team), {
            ...submission,
            category:category,
            statement:statement,
            time:new Date()
        }).then(()=>alert("noice")).catch((e)=>console.log(e));

      }
    return (
        <div className="bg-backgroundImg pb-4 font-DMSans min-h-full min-w-full">
            <Navbar/>
            <div className="bg-glass text-3xl sm:text-3xl md:text-3xl lg:text-5xl py-4 px-7 rounded-md w-[80vw] md:w-[60vw] lg:w-[60vw] text-center mx-auto mt-4">
                Submissions
            </div>
            <form className="flex justify-center items-center gap-5 mt-4 flex-col">
                <input value={submission.team} name="team" onChange={handleChange}  className="bg-glass text-xl sm:text-xl md:text-2xl lg:text-3xl w-[80vw] p-4 placeholder:text-black" placeholder="Team Name"></input>
                <input value={submission.firstMember} name="firstMember" onChange={handleChange} className="bg-glass text-xl sm:text-xl md:text-2xl lg:text-3xl w-[80vw] p-4 placeholder:text-black" placeholder="Name of first member"></input>
                <input value={submission.secondMember} name="secondMember"  onChange={handleChange} className="bg-glass text-xl sm:text-xl md:text-2xl lg:text-3xl w-[80vw] p-4 placeholder:text-black" placeholder="Name of second member"></input>
                <div className="flex w-[80vw] justify-between">
                    <select onChange={handleCategory}  className="bg-glass text-xl sm:text-xl md:text-2xl lg:text-3xl w-[35vw] p-4" defaultValue={category}>
                        <option value="category" disabled hidden>
                            Category
                        </option>
                        <option value="DSA">DSA</option>
                        <option value="DEV">DEV</option>
                    </select>
                    <select onChange={handleProblem} className="bg-glass text-xl sm:text-xl md:text-2xl lg:text-3xl w-[35vw] p-4" defaultValue={statement}>
                        <option value="statement" disabled hidden>
                            Problem
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
                <input value={submission.link}  onChange={handleChange} name="link"  className="bg-glass text-xl sm:text-xl md:text-2xl lg:text-3xl w-[80vw] p-4 placeholder:text-black" placeholder="Doc Link"></input>
                <button onClick={handleSubmission}  className="text-xl sm:text-xl md:text-2xl lg:text-3xl w-[35vw] p-4 bg-[#4285F4] rounded-md text-white">Submit</button>
            </form>
        </div>
    )
}

export default Submission