import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navigation from './Navigation'
export default function App(){
  return(
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about"element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}















/*import {useState}from 'react'
import Props from './Props'
import Vehicles from'./Vehicle'
import UserData from'./UserData'
function App(){
  const[name,setName]=useState('ReactJS')
  const[year,setYear]=useState(2013)
  return(
    <div>
      <UserData/>
      <Vehicles/>
      {/<p>good morning</p>
      <h1>good afternoon</h1>
      <p>Name:{name} year:{year}</p>
      <Props.studentName="subbhareddy".studentRollNo="1"/>  
      <Props.studentName="Neha".studentRollNo="2"/ >
      <props.studentName="sam".stdentRollNo="3"/> }  
      <Props/>
    </div>
  )
}

export default App*/