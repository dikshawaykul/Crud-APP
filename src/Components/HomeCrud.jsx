import React from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'
const HomeCrud = () => {
  return (
   <section id={style.nav}>
<Link to="/createstudents">CreateStudent</Link>
<Link to="/students">Student Details</Link>
   </section>
  )
}

export default HomeCrud
