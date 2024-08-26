import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import AboutMe from "./pages/AboutMe"
import Education from "./pages/Education"
import Experience from "./pages/Experience"
import Projects from "./pages/Projects"


function App() {


  return (

    <div className="bg-gray-100 h-screen py-5 font-primaryRegular">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>

  )
}

export default App
