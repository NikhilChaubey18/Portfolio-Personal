import { Route,Routes } from "react-router-dom"

import HomePage from "@/pages/HomePage"
import Layout from "@/layouts/layout"
import Profile from "@/pages/Profile"
import About from "@/pages/About"
import Resume from "@/pages/Resume"
import Project from "@/pages/Project"
import Contact from "@/pages/Contact"


export default function AppRoute() {
  return (
    <Routes>
    <Route path="/"  element={<Layout><HomePage/></Layout>}/>
    <Route path="/profile"  element={<Layout><Profile/></Layout>}/>
    <Route path="/about"  element={<Layout><About/></Layout>}/>
    <Route path="/resume"  element={<Layout><Resume/></Layout>}/>
    <Route path="/project"  element={<Layout><Project/></Layout>}/>
    <Route path="/contact"  element={<Layout><Contact/></Layout>}/>
    
      
    
    <Route path="/userpr" element={<h1>hii l'm fine</h1>}></Route>
   </Routes>
  )
}
