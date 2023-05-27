import React from 'react'
import { useState } from "react"
import style from "./home.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const CreateStudent = () => {
    let [name, setName] = useState("")
    let [college, setCollege] = useState("")
    

    let navigate = useNavigate()

    let nameData = (e) => {
        setName(e.target.value)
    }
    let collegeData = (e) => {
        setCollege(e.target.value)
    }


    let formHandle = () => {
        let payload = { name, college}
        axios.post("http://localhost:3000/students", payload)
            .then(() => {
                console.log("DATA HAS BEEN UPLOADED");
            })
            .catch(() => {
                console.log("SOMETHING WENT WRONG");
            })
        navigate("/students")

    }
    return (
        <div id={style.myForm}>
            <article>

                <label>Name</label>
                <input type="text" value={name} onChange={nameData} /><br />
                <label>College</label>
                <input type="text" value={college} onChange={collegeData} /><br />
                
                <button onClick={formHandle}>Submit</button>
            </article>
        </div>
    )
}

export default CreateStudent



