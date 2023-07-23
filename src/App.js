import React from 'react'
import Header from './components/Header'
import Homepage from './components/home/Homepage'
import About from './components/about/About'
import Projects from './components/project/Project'
import Contact from './components/contact/Contact'
function App() {
  return (
    <div>
     {/* <Header/> */}
     <Homepage/>
     <About/>
     <Projects/>
     <Contact/>
    </div>
  )
}

export default App