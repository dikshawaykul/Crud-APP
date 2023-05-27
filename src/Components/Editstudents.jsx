import { useEffect, useState } from "react"
import style from "./home.module.css"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const EditStudents = () => {
    let [name, setName] = useState()
    let [college, setCollege] = useState()
    
    let navigate = useNavigate()

    let nameData = (e) => {
        setName(e.target.value)
    }
    let collegeData = (e) => {
        setCollege(e.target.value)
    }
    

    let formHandle = () => {
        let payload = { name, college }
        axios.put(`http://localhost:3000/students/${index}`, payload)
            .then(() => {
                console.log("DATA HAS BEEN UPDATED");
            }).catch(() => {
                console.log("SOMETHING WENT WRONG");
            })
        navigate("/students")
    }


    let { index } = useParams()
    console.log(index);

    useEffect(() => {
        axios.get(`http://localhost:3000/students/${index}`)
            .then((response) => {
                setName(response.data.name)
                setCollege(response.data.college)
            }).catch(() => {
                console.log("did not get the data");
            })
    }, [])


    return (
        <div id={style.myForm}>
            <article>
                <h1>Update Students</h1>
                <label>Name</label>
                <input type="text" value={name} onChange={nameData} /><br />
                <label>College</label>
                <input type="text" value={college} onChange={collegeData} /><br />
                
                <button onClick={formHandle}>Submit</button>
            </article>
        </div>
    )
}

export default EditStudents