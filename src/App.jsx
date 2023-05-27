import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomeCrud from "./Components/HomeCrud"
import Student from "./Components/Student"
import CreateStudent from "./Components/CreateStudent"
import Editstudents from "./Components/Editstudents"


const App = () => {
  return (
    <div>
      <BrowserRouter>
<HomeCrud/>
<Routes>
    <Route path="/createstudents" element={<CreateStudent/>}/>
    <Route path="/students" element={<Student/>}/>
    <Route path="/edit/:index" element={<Editstudents/>}/>
    <Route/>
</Routes>

    </BrowserRouter>
    </div>
  )
}

export default App
