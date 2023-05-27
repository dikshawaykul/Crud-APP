
import axios from "axios"
import { useEffect, useState } from "react"
import style from "./home.module.css"
import { Link } from "react-router-dom"

const Student = () => {
    let [content, setContent] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/students`)
            .then((responce) => {
                console.log("Got the Data");
                console.log(responce.data);
                setContent(responce.data)
            })
            .catch(() => {
                console.log("Did not get the Data");
            })
    }, [])


    let deleteData = (value) => {
        axios.delete(`http://localhost:3000/students/${value}`)
        window.location.assign("/students")
}

    return (
        <div id={style.userHome}>
            {content.map((x) => {
                return (
                    <div id={style.cards}>
                        <table>
                            <tr>
                                <th colSpan="2">Student {x.id}</th>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>:{x.name}</td>
                            </tr>
                            <tr>
                                <td>College</td>
                                <td>:{x.college}</td>
                            </tr>
                            
                            <td><Link to={`/edit/${x.id}`}>EDIT</Link></td>
                            <td><button onClick={(() => { deleteData(x.id) })}>DELETE</button></td>
                        </table>
                    </div>
                )
            })}
        </div>
    )
}

export default Student









{/*http://localhost:3000/users
npx json-server Backend/db.json --watch port 5000
*/}
