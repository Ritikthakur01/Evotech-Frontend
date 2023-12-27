import React from 'react'
import style from '../style/surveyForm.module.css'
import { useState } from 'react';
import toast from 'react-hot-toast';


const SurveyForm = () => {

    const [ name , setName ] = useState("");
    const [ email , setEmail] = useState('');
    const [ message, setMessage ]=useState("");
    const [ gender, setGender ] = useState("");
    const [ address , setAddress ] = useState("");
    const [ nationality, setNationality ] = useState("");
    const [ number , setNumber ] = useState("");

    const [ loading , setLoading ] = useState(false)

    async function handelSubmit(e){
        e.preventDefault();
        const data = {
            name,
            email,
            message,
            gender,
            address,
            nationality,
            number
        }
        setLoading(true)

        const setData = await fetch("/formSubmission",{
            method:"POST" ,
            headers:{
                "Content-Type":"application/json"
            }, 
            body : JSON.stringify(data)
        }).then((res)=>res.json()).then((finalres)=>{
            setLoading(false)
            toast.success("Successfully submit")
        }).catch((err)=>{
            console.log("Error :", err);
            toast.error("Submission Failed")
        });

    }

  return (
    <div className={style.form_container}>
        <div className={style.form_mainContainer}>
            <form onSubmit = {handelSubmit}>
                <div className={style.form_control}>
                <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} required/>
                </div>

                <div className={style.form_control}>
                <select required placeholder="Gender" value={gender} onChange={(e)=>setGender(e.target.value)}>
                    <option value="">
                        --Please Select Gender
                    </option>
                    <option value="Male">
                        Male
                    </option>
                    <option value="Female">
                        Female
                    </option>
                </select>
                <label >Gender</label>
                </div>

                <div className={style.form_control}>
                <input type="text" required placeholder='Nationality' value={nationality} onChange={(e)=>setNationality(e.target.value)}/>
            
                </div>

                <div className={style.form_control}>
                <input type="email" required placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>

                <div className={style.form_control}>
                <input type="number" required placeholder='Mobile No.' value={number} onChange={(e)=>setNumber(e.target.value)}/>
                </div>

                <div className={style.form_control}>
                <input type="text" required placeholder='Address' value={address} onChange={(e)=>setAddress(e.target.value)}/>
                </div>

                <div className={style.form_control}>
                <input type="text" required placeholder='Message' value={message} onChange={(e)=>setMessage(e.target.value)}/>
                </div>

                <button className={style.btn} disabled={loading}>{loading ? "Loading.." : "Submit"}</button>
            </form>
        </div>
    </div>
  )
}

export default SurveyForm