import {Routes,Route} from 'react-router-dom'
// import './App.css'
import About from './container/About/About'
import Contact from './container/Contact/Contact'
import Home from './container/Home/Home'
// import Resume from './container/Resume/Resume'
import Skills from './container/Skills/Skills'
import Projects from './container/Projects/Projects'
import NavSection from './components/NavSection/NavSection'

function App() {
 

  return (
    <>
      {/* <nav section> */}
      <NavSection/>


      {/* <main Section> */}
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        {/* <Route path='/resume' element={<Resume/>}></Route> */}
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </>
  )
}

export default App
